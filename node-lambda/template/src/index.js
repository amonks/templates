// lambda's node environment hasn't been updated recently.
// we'll use babel to turn this contemporary javascript into old-school javascript.
// see gulpfile.js for more details
require('babel-polyfill')

// const AWS = require('aws-sdk')

// this function is called by aws lambda
exports.handler = function (event, context) {
  context.succeed('it worked!') || context.fail('uh oh')
}

