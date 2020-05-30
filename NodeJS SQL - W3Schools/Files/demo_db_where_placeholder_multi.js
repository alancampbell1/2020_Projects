var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password!",
	database: "mydb"
});

con.connect(function(err) {

	if(err) throw err;
	var adr = 'Celbridge';
	var name = 'Alan';
	var sql = 'SELECT * FROM customers WHERE address = ? OR name = ?';

	con.query(sql, [adr, name], function(err, result) {

		if(err) throw err;
		console.log(result);

	});
});
