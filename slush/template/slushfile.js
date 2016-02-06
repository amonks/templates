var gulp = require('gulp')
var inquirer = require('inquirer')
var template = require('gulp-template')

gulp.task('default', function (done) {
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'What do you want to name your app?', default: getNameProposal()}
  ],
  function (answers) { // get the answers
    gulp.src(__dirname + '/templates/app/**')
    .pipe(template(answers))
    .pipe(gulp.dest('./'))
  })
})

function getNameProposal () {
  var path = require('path')
  try {
    return require(path.join(process.cwd(), 'package.json')).name
  } catch (e) {
    return path.basename(process.cwd())
  }
}
