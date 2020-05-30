var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abbeyfarm17!",
	database: "mydb"
});

con.connect(function(err) {

	if(err) throw err;
	
	var sql = "CREATE TABLE products (id INT, name VARCHAR(255))";
	
	con.query(sql, function(err, result) {

		if(err) throw err;
		console.log("Table created");

	});

	sql = "INSERT INTO products (id, name) VALUES ?";
	var values = [
		['154', 'Chocolate Heaven'],
		['155', 'Tasty Lemons'],
		['156', 'Vanilla Dreams']
	];
	con.query(sql, [values], function (err, result){

		if(err) throw err;
		console.log("Number of rows affected: " + result.affectedRows);
	});	
});
