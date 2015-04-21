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
  }
});

module.exports = User;
