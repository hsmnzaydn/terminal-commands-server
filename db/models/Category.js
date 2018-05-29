var mongoose=require("mongoose");

var Schema=mongoose.Schema;


var category=new Schema(
    {
        
        title:{type:String, default: NaN}
        

    }
)

module.exports=mongoose.model('Category',category);

