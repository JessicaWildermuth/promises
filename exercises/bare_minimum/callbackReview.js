/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      callback(err, fileData);
    } else {
      //need the first line
      //need to transform the data we got into a string
      var firstLine = fileData.toString();
      //now need first line, we can split the string into an array by line and then grab the first line
      firstLine = firstLine.split('\n');
      callback(err, firstLine[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  //need to make a get request and then use the callback to return the request.statuscod
  request(url, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
