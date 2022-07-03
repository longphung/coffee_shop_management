// import express library
// old syntax
// const express = require('express')
import express from 'express'
import morgan from 'morgan'
import sampleCoffeeData from './data.json' assert {type: "json"}
// Create new express app
const app = express()

app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/coffee', (req, res) => {
  res.json(sampleCoffeeData)
})
// TODO: Create POST to '/coffee', take new coffee from request body, add it to the array and respond with the new array

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
  }
)
