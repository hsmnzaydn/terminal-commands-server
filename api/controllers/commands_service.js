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

    commandSchema.find(function(err,commandList){
        if(err){
            createCommonResponse(ERROR_CODE,ERROR_MESSAGE,function(callback){
                res.status(callback.code)
                res.send(callback)
             })
        }else{
                createCommonResponse(SUCCESS_CODE,SUCCES_MESSAGE,function(callback){
                    res.status(callback.code)
                    res.send(commandList)
                })
        }



    })
    



}

