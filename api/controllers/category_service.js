require('../../utils/global')
let categorySchema=require('../../db/models/Category')

module.exports={getCategories}


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {next} next 
 */
function getCategories(req,res,next) {
    
    categorySchema.find(function(err,categoryList){
        if(err){
            createCommonResponse(ERROR_CODE,ERROR_MESSAGE,function(callback){
                res.status(callback.code)
                res.send(callback)
             })
        }else{
            createCommonResponse(SUCCESS_CODE,SUCCESS_MESSAGE,function(callback){
                res.status(callback.code)
                res.send(categoryList)
            })
        }
    })



}
