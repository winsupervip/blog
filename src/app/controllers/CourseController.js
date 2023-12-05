const Course = require("../models/Course");
const {mongooseToObject}=require('../../util/mongoose')

class CourseController {

 //GET /courses/slug
  show(req, res,next) {

    Course.findOne({slug:req.params.slug}).then(course=>{res.render('courses/show',{course:mongooseToObject(course)})}).catch(next)

    
  }
   //GET /courses/create
   create(req, res,next) {
    res.render("courses/create")
  }
   //POST /courses/store
   store(req, res,next) {
    const formData=req.body
    formData.thumbnail=`https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/325766439_858170918735498_282815434537049143_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=-Vtu-i9vc30AX_G-ec4&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDN6QDlRn4WrhDsZck8ZYCc--joHkzQq3sTNImbj-Y5ZA&oe=63CDAFBB`
    const course=new Course(formData)
    course.save().then(()=>res.redirect('/')).catch((err=>{}))
   
  }
    //GET /courses/:id/edit
    edit(req, res,next) {
   
      Course.findById(req.params.id).then(course=>res.render('courses/edit',{course:mongooseToObject(course)})
      ).catch(next)
      
    }
      //PUT /courses/:id
      update(req, res,next) {

        Course.updateOne({_id:req.params.id},req.body).then(()=>res.redirect('/me/stored/courses').catch(next))
        
      }
}
module.exports = new CourseController();
