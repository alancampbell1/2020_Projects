var mysql = require('mysql');

var con = mysql.createConnection({

	host: "localhost",
	user: "root",
	password: "password!",
	database: "mydb"
}); 

con.connect(function(err){
	if(err) throw err;
	var sql = "SELECT * FROM customers LIMIT 2 OFFSET 3";
	con.query(sql, function(err, result){

		if(err) throw err;
		console.log(result);
	});
});
