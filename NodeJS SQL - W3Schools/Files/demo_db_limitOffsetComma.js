var mysql = require('mysql');

var con = mysql.createConnection({

	host: "localhost",
	user: "root",
	password: "Abbeyfarm17!",
	database: "mydb"
}); 

con.connect(function(err){
	if(err) throw err;
	var sql = "SELECT * FROM customers LIMIT 2, 3";
	con.query(sql, function(err, result){

		if(err) throw err;
		console.log(result);
	});
});