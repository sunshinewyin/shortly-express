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
    bcrypt.compare(potentialpassword, this.get('password'),function(err, doesMatch){
      callback(doesMatch);
    });
  },

  hashPassword: function(){
    var cipher = Promise.promisify(bcrypt.hash);
    //return a promise- bookshelf will wiat for the promise
    //to resolve before completing the create action
    return cipher(this.get('password'),null, null)
      .bind(this)
      .then(function(hash){
        this.set('password', hash);
      });
  }
});

module.exports = User;
