"use strict";

let mongoose = require("../../helpers/setup_information_mongodb");
let Schema = mongoose.Schema;

let schemaDefinition = new Schema(
  {
    
    user_name: { type: String },
    user_email: { type: String },
    user_phone: { type: String },
    user_age: { type: String },
    user_city: { type: String },
    
    Image: { type: String },
    
    created_at: { type: Date, default: () => Date.now() },
    updated_at: { type: Date, default: () => Date.now() },
  },
  { versionKey: false, collection: "userDetails" }
);

let exportModel = mongoose.model("userDetails", schemaDefinition);

module.exports = exportModel;

// isUser_firstTime:{type:String,default: true},
