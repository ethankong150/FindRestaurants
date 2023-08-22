# FindRestaurants

As a Generate developer, you’ll need to create complex APIs that programmatically interact with databases. We’re going to test your ability to stand up a server, write efficient endpoints, and interact with a database. You will demo your server & run all desired tests during your interview.

Set up a database on the platform of your choice, and insert the [sample data](https://github.com/brianreicher/tech_challenge_data) into your database. (You’re welcome to use MongoDB, Supabase, Firebase, etc.)

Build the following RESTful endpoints that connect with your database. Use a language and  framework of your choosing (i.e Go & Gin, JavaScript with Node/Express, etc.):

- **GET** `n` restaurants with the highest average ratings, sorted by average score.
    
- **PUT** the inspection `grade` of a restaurant for a given `resturant_name`
    - To check your route, create an API  PUT test to update the most recent `grade` of the `“Isle of Capri Resturant”`  to a `B` , and then check the updated `grade`.
    
- **GET** `n` restaurants in a given borough, `b`,  that serve a given cuisine, `c`