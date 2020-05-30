var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abbeyfarm17!",
	database: "mydb"
});

con.connect(function(err){
	if(err) throw err;
	con.query("SELECT * FROM customers WHERE address = 'n%'", function(err, result){

		if(err) throw err;
		console.log(result);		

	});
});

