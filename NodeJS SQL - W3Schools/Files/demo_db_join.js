var mysql = require('mysql');

var con = mysql.createConnection({

	host: "localhost",
	user: "root",
	password: "Abbeyfarm17!",
	database: "mydb"
}); 

con.connect(function(err){

	if(err) throw err;
	var sql = "SELECT users.name AS user, products.name AS favourite FROM users JOIN products ON users.favourite_product = products.id";
	con.query(sql, function(err, result) {

		if(err) throw err;
		console.log(result);
	});
});