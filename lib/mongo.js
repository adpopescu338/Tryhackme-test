const MongoClient = require('mongodb').MongoClient;

//export a function for connecting to the databse to avoid the boilerplate in all files where an interaction with the db is necessary
module.exports = async (databaseName, collectionName) => {
   const uri = `${process.env.MONGO_URL}/${databaseName}`;
	try {
      const db = await MongoClient.connect(uri);
		return db.db(databaseName).collection(collectionName);
	} catch (error) {
		console.log('Mongodb connection error: ', error);
		return { error };
	}
};
