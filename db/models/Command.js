var mongoose=require("mongoose");

var Schema=mongoose.Schema;


var command=new Schema(
    {
        category:{type:mongoose.Schema.Types.ObjectId, ref:"Category"},
        language:{type: String, default: "ENG"},
        text:{type:String, default: NaN},
        detail: {type:String, default: NaN}

    }
)

module.exports=mongoose.model('Command',command);

