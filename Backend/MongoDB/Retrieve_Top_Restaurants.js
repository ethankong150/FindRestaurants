const MongoClient = require('mongodb').MongoClient;
// const mongoose = require("mongoose");

function Retrieve_Top_Restaurants(num_restaurants, borough, cuisine) {
  return new Promise((resolve, reject) => {

    // const url = "mongodb://localhost:27017"
    const url =  process.env.URL
    const dbName = 'new_york'
    const client = new MongoClient(url)
    client.connect(url)
      .then(client => {
        console.log('Connected to MongoDB')

        const db = client.db(dbName);
        const collection = db.collection('restaurants')

        const aggregationPipeline = [
            {
              $unwind: "$grades"
            },
            {
              $group: {
                _id: "$restaurant_id",
                name: { $first: "$name" },
                averageScore: { $avg: "$grades.score" },
                borough: { $first: "$borough"},
                cuisine: { $first: "$cuisine"}
              }
            },
            {
              $sort: { averageScore: -1 }
            },
            {
              $limit: Number(num_restaurants)
            }
          ]

          if (borough !== undefined) {
            aggregationPipeline.unshift({
              $match: { "borough": borough }
            })
          }
          
          if (cuisine !== undefined) {
            aggregationPipeline.unshift({
              $match: { "cuisine": cuisine }
            })
          }

        collection.aggregate(aggregationPipeline).toArray()
          .then(results => {
            client.close()
            resolve(results)
          })
          .catch(err => {
            console.error('Error aggregating data:', err)
            client.close()
            reject(err)
          });
      })
      .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        reject(err); // Reject the promise with the error
      });
  });
}

module.exports = Retrieve_Top_Restaurants;