var ExamArr = [];

var o = {};

o.getAll = function() {
  return ExamArr;
};

o.set = function(d) {
  ExamArr.push(d);
};

module.exports = o;
