var mongoose=require("mongoose");

var Schema=mongoose.Schema;


var category=new Schema(
    {
        
        title:{type:String, default: NaN},
        language:{type:String, default:"ENG"}

    }
)

module.exports=mongoose.model('Category',category);

