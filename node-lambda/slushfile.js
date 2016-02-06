var gulp = require('gulp')
var template = require('gulp-template')

gulp.task('default', function (done) {
  var answers = {name: getNameProposal()}
  gulp.src(__dirname + '/template/**/*')
  .pipe(template(answers))
  .pipe(gulp.dest('./'))
})

function getNameProposal () {
  var path = require('path')
  try {
    return require(path.join(process.cwd(), 'package.json')).name
  } catch (e) {
    return path.basename(process.cwd())
  }
}
