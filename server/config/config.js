//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://himpatel:hariom@ds123124.mlab.com:23124/listofufbuildings', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyDiTGJMTb4QBPnRy1b3iMvMji5YL0SR2rk'
  },
  port: 8080
};