'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing
var path=require('path')
require('dotenv').config({path:'./process.env'})
var database=require('./db/database')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);


 
  app.use('/public',express.static(path.join(__dirname,'public')))

  app.set('view engine','ejs')
  app.set('views',path.join(__dirname,'/views'))
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())

  var port = process.env.PORT ;
  app.listen(port);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


});
