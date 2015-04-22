var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
//change this from the link
  tableName: 'users',
  hasTimestamps: true,
  //defaults: {
  //  visits: 0
  //},
  initialize: function(){
    //this.set('username',username);
    //this.set('password',password);

  },
  comparePasswords: function(potentialpassword, callback){
    bcrypt.compare(potentialpassword, this.password)
    //fetch the password from the table
    //hash (the password from the request + the salt)
    //compare the two
    //callback(isMatch);

  }
});




module.exports = User;
