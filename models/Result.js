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
  console.log(resultArr);
  var res = _.filter(resultArr, function(item) {
    return item.index == ind;
  });

  console.log("get from index", res);
  return res;
};

o.saveResult = function(d) {
  resultArr = d;
  console.log(resultArr);
};

module.exports = o;
