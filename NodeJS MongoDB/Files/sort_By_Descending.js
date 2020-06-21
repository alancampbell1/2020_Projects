var mongoClient = require('mongodb').MongoClient;
var url 	= "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db){

	if(err) throw err;
	var dbo = db.db("mydb");
	/** Sort by name	**/
	var mysort = { name: -1 };
	dbo.collection("customers").find().sort(mysort).toArray(function(err, result){

		if(err) throw err;
		console.log(result);
		db.close();
	});
});