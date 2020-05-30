var mysql = new require('mysql');

var con  = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abbeyfarm17!"
}); 

con.connect(function(err) {
	if(err) throw err;
	console.log("Connected!!");
});
