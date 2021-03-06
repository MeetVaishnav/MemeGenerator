var ldap = require('ldapjs');
var assert = require('assert');
var options = require('./options-handler').options;
var log = require('./logger').log;

exports.login = function(uid,password,successCallback,errorCallback) {
  var client = ldap.createClient({
    url: options.login.ldap.server
  });
  var userField = options.login.ldap.userField;
  var userDN = options.login.ldap.userDN;
  client.bind(userField+'='+uid+','+userDN, password, function(err) {
    if (err) {
      log.error({error:err});
      errorCallback(err.message);
    }
    client.unbind(function(err2) {
      if (err) {
        // Already reported this error.
      } else if (err2) {
        log.error({error:err2});
        errorCallback(err2.message);
      } else {
        successCallback();
      }
    });
  });
};
