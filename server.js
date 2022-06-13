import express from 'express'

const app = express()

//Mount routes

app.get('/', function(req,res){
  res.send('<h1>hello, friends</h1>')
})

//Tell app to listen on port 3000

app.listen(3000, function(){
  console.log('Listening on port 3000')
})