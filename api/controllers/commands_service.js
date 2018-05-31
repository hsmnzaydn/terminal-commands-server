let commandSchema=require('../../db/models/Command')
require('../../utils/global.js')
require('../../utils/response_creator')

module.exports={getCommands}


/**
 * @param {request} req
 * @param {response} res
 * @param {next} next 
 * 
 */

function getCommands(req,res,next) {
    var language=req.swagger.params.language.value;
    commandSchema.find({language:language},function(err,commandList){
        if(err){
            createCommonResponse(ERROR_CODE,ERROR_MESSAGE,function(callback){
                res.status(callback.code)
                res.send(callback)
             })
        }else{
                createCommonResponse(SUCCESS_CODE,SUCCESS_MESSAGE,function(callback){
                    res.status(callback.code)
                    res.send(commandList)
                })
        }



    })
    



}

