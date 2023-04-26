// let constant = "./config/config.dev.js";
// process.config.global_config = require(constant);
// process.config.global_config.aws_ses_config = require("./config/aws.ses.config.json");

const express = require('express');
const bodyparser = require('body-parser');
// const responseHandler = require('./modules/middleware/responseHandler');
// const cronjobs = require('./modules/cronjobs/cronjob_settings');
const app = express();
const cors = require("cors");
const path = require("path");
let swaggerJSDoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


const port = 3000;
let server = app.listen(port, () => {
    console.log('App is listing at port  :' + port)
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// app.use(responseHandler.onSuccess);

let stripeWebhookUrl = "/api/stripe/webhook";
app.use((req, res, next) => {
    if (req.url.startsWith(stripeWebhookUrl)) {
        next();
    } else {
        bodyparser.urlencoded({ limit: '50mb', extended: true })(req, res, next);
    }
});

app.use((req, res, next) => {
    if (req.url.startsWith(stripeWebhookUrl)) {
        bodyparser.raw({ type: 'application/json' })(req, res, next)
    } else {
        bodyparser.json({ limit: '50mb' })(req, res, next);
    }
});


// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/*app.use(bodyparser.urlencoded({
    limit: '50mb',
    extended: true,
}));
app.use(bodyparser.json());
*/
require('./routes')(app);
// app.use(responseHandler.onError);

// cronjobs.startCronJob();

