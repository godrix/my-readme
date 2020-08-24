//const fs = require('fs').promises
//const path = require("path")
const prompts = require('prompts');
const {askDefault} = require('./questions')

module.exports.main = async function(){
  await prompts(askDefault)
} 