// import express library
// old syntax
// const express = require('express')
import express from 'express'
import morgan from 'morgan'
import sampleCoffeeData from 'data.json'
// Create new express app
const app = express()

app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.send('Hello World')
})
// TODO: Create GET to '/coffee', return sampleCoffeeData. Use express response.json() function

app.listen(3000, () => {
  console.log('ready');
  }
)
