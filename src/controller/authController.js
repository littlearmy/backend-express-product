'use strict';

var response = require('../res');
var connection = require('../connection');
var md5 = require('md5');

exports.login = function(req, res){
    var email = req.body.email;
    var password = md5(req.body.password);

    connection.query('select * from users where email = ? AND password = ?',[email,password], function(error,rows,fields){
        if(error){
            console.log(password);
        }else {
            response.ok(rows, res);
        }
    });
}