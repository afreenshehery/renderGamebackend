'use strict';
let MongooseObj = require("mongoose").Mongoose
    // config   = process.config.global_config.setup_information_mongodb;

let mongoose = new MongooseObj();

// mongoose.connect(config.host+ ":" + config.port + "/" + config.database_name,{ useNewUrlParser: true, useUnifiedTopology: true },);
// mongoose.connect(mongodb+srv://turbog:<password>@cluster0.yfe86w2.mongodb.net/?retryWrites=true&w=majority);
// mongodb+srv://turbog:<password>@cluster0.yfe86w2.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://turbog:oUzrp2AOpdftzWks@cluster0.yfe86w2.mongodb.net/tuborg?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
mongoose.Promise = global.Promise;

module.exports = mongoose;