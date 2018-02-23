const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect to database');
    }
    console.log("connected to databes");

    db.collection('Todos').insertOne({
        text: "some text here",
        completed: false
    }, (err, result) => {
        if(err) {
           return console.log('unable to write collection');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});