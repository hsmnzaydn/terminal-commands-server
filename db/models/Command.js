var mongoose=require("mongoose");

var Schema=mongoose.Schema;


var command=new Schema(
    {
        category:{type:mongoose.Schema.Types.ObjectId, ref:"Category"},
        text:{type:String, default: NaN},
        detail: {type:String, default: NaN}

    }
)

module.exports=mongoose.model('command',command);

