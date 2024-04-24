const express = require('express');
const mongoose = require('mongoose');

// Define Mongoose schema for your data
const countrySchema = new mongoose.Schema({
    _id: String,
    countryName: String,
    dial_code: String,
    code: String,
    label: String,
    value: String
});

// Define a Mongoose model based on the schema
const Country = mongoose.model('countrycode', countrySchema);

const app = express();


app.get('/', async (req, res, next) => {
    try {
        // Fetch data from the database
        const countries = await Country.find();
        res.json(countries);
        console.log(countries)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});

mongoose.connect('mongodb+srv://sabarinathan_stack:Sabari123@cluster0.whyrcgy.mongodb.net/countryCode?retryWrites=true&w=majority')
.then(result =>{    
  app.listen(4000);
})
.catch(err =>{
  console.log(err)
})
