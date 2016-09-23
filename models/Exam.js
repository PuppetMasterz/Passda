var mongoose = require('mongoose');

var examSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    results: [
        {
            studentId: Number,
            studentName: String,
            marks: Number
        }
    ]
});

var Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;