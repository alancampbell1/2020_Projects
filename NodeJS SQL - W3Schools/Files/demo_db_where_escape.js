var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abbeyfarm17!",
	database: "mydb"
});

con.connect(function(err) {

	if(err) throw err;
	var adr = 'Celbridge';
	var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);

	con.query(sql, function(err, result) {

		if(err) throw err;
		console.log(result);

	});
});
