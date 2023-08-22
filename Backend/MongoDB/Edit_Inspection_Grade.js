const MongoClient = require('mongodb').MongoClient;

function Edit_Inspection_Grade(restaurant_name, grade) {
  
  return new Promise((resolve, reject) => {
    const url = process.env.URL
    const dbName = 'new_york';
    const client = new MongoClient(url)

    client.connect(url)
      .then(client => {
        console.log('Connected to MongoDB')

        const db = client.db(dbName);
        const collection = db.collection("restaurants")

        const filter = { "name": restaurant_name }
        const update = {
          $set: {
            "grades.0.grade": grade
          }
        };

        collection.updateOne(filter, update)
          .then(result => {
            // console.log('Document updated:', result)
            client.close();
            resolve(result);
          })
          .catch(err => {
            console.error('Error updating document:', err)
            client.close()
            reject(err)
          });
      })
      .catch(err => {
        console.error('Error connecting to MongoDB:', err)
        reject(err)
      })
  });
}
module.exports = Edit_Inspection_Grade;