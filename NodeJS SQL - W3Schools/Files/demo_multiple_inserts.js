var mysql = require('mysql');

var con = mysql.createConnection({

	host: "localhost",
	user: "root",
	password: "password!",
	database: "mydb"
});

con.connect(function(err){

	if(err) throw err;
	console.log("Connected");
	var sql = "INSERT INTO customers (name, address) VALUES ?";
	var values = [
		['Alan', 'Celbridge'],
		['Stephen', 'Naas'],
		['Sean', 'Carbury'],
		['Conor', 'Donegal'],
		['Paul', 'Clane']
	];
	con.query(sql, [values], function (err, result){

		if(err) throw err;
		console.log("Number of rows affected: " + result.affectedRows);
	});
});