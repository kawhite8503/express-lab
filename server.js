import express from 'express'
import { studentData } from './data/student-data.js'


//Create Express app server

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

//Mount routes

app.get('/', function(req,res){
  res.send('<h1>hello, friends</h1>')
})

app.get('/home', function (req, res){
  res.render('home')
})

app.get('/studentData', function(req,res){
  res.render('studentData/index', {
    studentData: studentData
  })
})

//Tell app to listen on port 3000

app.listen(3000, function(){
  console.log('Listening on port 3000')
})