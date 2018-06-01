require('../../utils/global')
let categorySchema=require('../../db/models/Category')
    commandSchema=require('../../db/models/Command')

module.exports={getCategories,addCategory,getCommandsOfCategory}


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {next} next 
 */
function getCategories(req,res,next) {
    var language=req.swagger.params.language.value;
    categorySchema.find({language:language},function(err,categoryList){
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


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {next} next 
 */
function addCategory(req,res,next) {
        var category=new categorySchema({
            title:req.body['name'],
            language:req.body['language']
        })

        category.save(function(err,category){
            if(err){
                createCommonResponse(ERROR_CODE,ERROR_MESSAGE,function(callback){
                    res.status(callback.code)
                    res.send(callback)
                 })
            }else{
                createCommonResponse(SUCCESS_CODE,SUCCESS_MESSAGE,function(callback){
                    res.status(callback.code)
                    res.send(callback)
                 })
            }
        })

}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {next} next 
 */
function getCommandsOfCategory(req,res,next) {
    var categoryId=req.swagger.params.categoryId.value
    commandSchema.find({category:categoryId},function(err,commands){
        if(err){
            createCommonResponse(ERROR_CODE,ERROR_MESSAGE,function(callback){
                res.status(callback.code)
                res.send(callback)
             })
        }else{
            createCommonResponse(SUCCESS_CODE,SUCCESS_MESSAGE,function(callback){
                res.status(callback.code)
                res.send(commands)
             })
        }
    })
}