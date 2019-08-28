DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer Mice", "Electronics", 50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monitors", "Electronics", 500, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chewing Gum", "Food", 5, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Protein Powder", "Supplements", 25, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laundry Detergent", "Household Items", 7, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Household Items", 20, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirts", "Clothing", 15, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Underwear", "Clothing", 10, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vitamins", "Supplements", 20, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Office Chairs", "Office Supplies", 1000, 30);








