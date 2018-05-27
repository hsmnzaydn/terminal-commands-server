

/**
 * @param(code) integer
 * @param(message) string
 * @param(callback) object
 */

global.createCommonResponse=function(code,message,callback){
    var response=new Object();
    response.code=code;
    response.message=message;

    callback(response)

}

