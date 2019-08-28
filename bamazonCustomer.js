var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "bg2987dw*",
  database: "bamazon"
});

var stock


// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user

  start();
  
});

function start() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;

        let objArray = []

        for (var i = 0; i < results.length; i++) {
            var itemObj = {
                ID: results[i].id,
                Item: results[i].product_name,
                Price: "$" + results[i].price,
                Quantity: results[i].stock_quantity
            };
            objArray.push(itemObj)
          }
       
          console.table(objArray)

        inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
              }
              return choiceArray;
            },
            message: "What product would you like to purchase?"
          },
          {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?"
          }
        ])
        .then(function(answer) {


            let orderQuantity = answer.quantity

            var userChoice 

            for (var i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.choice) {
                    userChoice = results[i]
                }
              }

        
            stock = userChoice.stock_quantity
            

            if (orderQuantity > stock) {
                console.log("Invalid. Must select an available quantity")
                start()
            }

            console.log(orderQuantity)

            purchaser(orderQuantity, userChoice.id, userChoice.product_name, userChoice.price)


        });
    }
    
    
    )
}

function purchaser(quantityVariable, idVariable, nameVariable, priceVariable) {
	connection.query(
		"UPDATE products SET ? WHERE ?", 
		[
			{
				stock_quantity: stock - quantityVariable
			},
			{
				id: idVariable
			}
		],
		function(error, response) {
            if (error) throw error;

            let cost = quantityVariable * priceVariable
            
            console.log("Congrats! You purchased "+quantityVariable+" "+nameVariable+ "! This will cost "+cost+ " dollars.")
            start()
	});
}
