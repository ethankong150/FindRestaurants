"use strict";
const express = require("express");
let router = express.Router();

const Retrieve_Top_Restaurants = require("../MongoDB/Retrieve_Top_Restaurants");
const Edit_Inspection_Grade = require("../MongoDB/Edit_Inspection_Grade")

const SpecificReforamt = require("../Reformat/SpecificReformat");
const TopReformat = require("../Reformat/TopReformat");


router.get('/:num_restaurants', async (req, res) => {
    try {

        const num_restaurants = req.params.num_restaurants

        const borough = req.body.query?.borough
        const cuisine = req.body.query?.cuisine
 
        const temp = await Retrieve_Top_Restaurants(num_restaurants, borough, cuisine)

        let results = []
        if(typeof borough === "undefined" || typeof cuisine === "undefined") {
          results = TopReformat(temp)
        } else {
          results = SpecificReforamt(temp)
        }
        res.status(200).json({code: 200, data: results, message: "Successfully retrieved desired restaurants"})
    } catch (error) {
      console.error('Error retrieving restaurants:', error)
      res.status(500).send('Error retrieving restaurants')
    }
  })

  router.put('/grade', async (req, res) => {
    try {
        const restaurant_name = req.body.params?.restaurant_name
        const grade = req.body.params?.grade

        const result = await Edit_Inspection_Grade(restaurant_name, grade)
        if(result.modifiedCount == 1) {
          res.status(201).json({code: 201, message: "Successfully edited Inspection Grade"})
        } else {
          res.status(400).json({code: 404, message: "Error finding desired Restaurant to edit or no changes or made"})
        } 
    } catch (error) {
      console.error('Error editing Inspection Grade: ', error)
      res.status(500).send('Error editing Inspection Grade')
    }
  })

module.exports = router;