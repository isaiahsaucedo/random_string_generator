// Random String Generator
// Author @isaiahsaucedo

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

require('dotenv').config(); 


// server and port declaration

var app = express()
const port = process.env.PORT || 5000;

// middleware

app.use(express.json())

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false, 
}))





// connect to mongoDB atlas
// uncomment to connect to database
/*
const uri = process.env.ATLAS_URI; 
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}); 

mongoose.connection.once("open", () => {
    console.log('Successfully connected to MemorStringDB!')
}).on("error", (error) => {
    console.log('Failed to establish connection to MemorStringDB.' + error)
})
*/

// routes

const wordRouter = require('./routes/words')

app.use('/api', wordRouter)


// where the server is listening

app.listen(port, ()=> {
    console.log('Sever started on port: ' + port)

})