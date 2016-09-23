var _ = require('lodash');

var resultArr = [];

var o = {};

o.getAll = function() {
  return resultArr;
};

o.getFromExamID = function(examID) {
  return _.find(resultArr, function(item) {
    return item.examID == examID;
  });
};

o.getFromIndex = function(ind) {
  return _.find(resultArr, function(item) {
    return item.index == ind;    
  });
};

o.saveResult = function(d) {
  resultArr.push(d);
  console.log(resultArr);
};

module.exports = o;
