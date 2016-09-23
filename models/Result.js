var _ = require('lodash');

var resultArr = [];

var o = {};

o.getAll = function() {
  return resultArr;
};

o.getFromExamID = function(examID) {
  _.find(resultArr, function(item) {
    return item.examID = examID;
  });
};

o.saveResult = function(d) {
  resultArr.push(d);
};

module.exports = o;
