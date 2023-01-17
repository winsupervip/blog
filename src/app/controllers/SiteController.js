class SiteController{
    //[GET] /
    index(req,res){
res.render('Site')
    }
    //[GET] /search
    search(req,res){
res.render('search')

            }

}
module.exports=new SiteController;