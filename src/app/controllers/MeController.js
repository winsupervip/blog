const Course = require("../models/Course");
const {multiMongooseToObject}=require('../../util/mongoose')
class SiteController {

  //[GET] /me/stored/courses
  storeCourses(req, res,next) {
    Course.find({}).then(courses=>res.render('me/store-courses',{courses:multiMongooseToObject(courses)}))
.catch(next)

  }
}
module.exports = new SiteController();
