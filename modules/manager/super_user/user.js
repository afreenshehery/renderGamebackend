"use strict";

let _ = require("lodash"),
  EmployeesModel = require("../../models/organization_management/Organization_user"),
  
   nodemailer = require('nodemailer')
   
 



let addEmployees = async (user, req) => {
  let body = req.body.body ? JSON.parse(req.body.body) : req.body;
  console.log(body,'body')
  
  


  let createData = {
    user_name:body.user_name,
    user_age:body.user_age,
    user_email:body.user_email,
    user_phone:body.user_phone,
    user_city:body.user_city,
    Image:body.image
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreplytuborgcricketleague@gmail.com',
      pass: 'cfyrmigcdlqydoqe'
    }
  });
//   anwastine@gmail.com
// Anwarmusix3210

  const mailOptions = {
    from: 'noreplytuborgcricketleague@gmail.com',
    to: body.user_email,
    subject: 'Tuborg cricket league.',
    text: 'Hey Guest, Here is Your Tuborg cricket league selfie.',
    attachments: [
      {
        filename: 'image.jpg',
        path: body.image,
        cid: 'my-image'
      }
    ]
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

 






  return EmployeesModel(createData).save();




};

module.exports = {
  
  addEmployees,
 
 
};
