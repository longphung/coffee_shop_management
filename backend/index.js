// import express library
// old syntax
// const express = require('express')
import express from 'express'
// Create new express app
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)
