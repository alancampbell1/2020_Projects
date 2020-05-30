var mysql = require('mysql');

var con = mysql.createConnection({
	
	host: "localhost",
	user: "root",
	password: "password!",
	database: "mydb"
});

con.connect(function(err) {

	if(err) throw err;
	var sql = "UPDATE customers SET address = 'Maynooth' WHERE address = 'Carbury'";
	con.query(sql, function(err, result){
	
		if(err) throw err;
		console.log(result.affectedRows + " records(s) updated");
	});
});