var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abbeyfarm17!",
	database: "mydb"
});

con.connect(function(err) {

	if(err) throw err;
	
	var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favourite_product VARCHAR(255))";
	
	con.query(sql, function(err, result) {

		if(err) throw err;
		console.log("Table created");

	});

	sql = "INSERT INTO users (name, favourite_product) VALUES ?";
	var values = [
		['John', '154'],
		['Peter', '154'],
		['Amy', '155'],
		['Hannah', ''],
		['Michael', '']
	];
	con.query(sql, [values], function (err, result){

		if(err) throw err;
		console.log("Number of rows affected: " + result.affectedRows);
	});	
});
