// Random String Generator
// Author @isaiahsaucedo

const mongoose = require('mongoose')

const Schema = mongoose.Schema


const wordSchema = new Schema({
words: [{
    type: String
}]





})

const Word = mongoose.model('Word', wordSchema) 
module.exports = Word; 