// import express library
// old syntax
// const express = require('express')
import express from 'express'
import morgan from 'morgan'
// Create new express app
const app = express()

app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('ready');
  }
)
