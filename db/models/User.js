var mongoose=require("mongoose");

var Schema=mongoose.Schema;


var command=new Schema(
    {
        category:{type:String, default: "Uncategorized"},
        text:{type:String, default: NaN},
        detail: {type:String, default: NaN}

    }
)

