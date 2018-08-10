// Resuability

var listStudents = [{
        score: 900,
        subject: 'Math',
        location: 'Atlanta',
        name: 'Patrick'
    },
    {
        score: 400,
        subject: 'Math',
        location: 'Dallas',
        name: 'Johanna'
    },
    {
        score: 500,
        subject: 'Science',
        location: 'New York',
        name: 'Sadrack'
    },
    {
        score: 700,
        subject: 'Math',
        location: 'Atlanta',
        name: 'Peter'
    }
];

function evaluateMathStudents(students, callback) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].subject === 'Math') {
            callback(students[i]);
        }
    };
}


var log = console.log;

evaluateMathStudents(listStudents, function(student) {
    log('Math Score: ', student.score);
});


var totalScore = 0;
evaluateMathStudents(listStudents, function(student) {
    totalScore += student.score;
});

console.log('Total Score: ', totalScore);




var firstPlaceStudent = {};
var currentScore = 0;

function getHigherScore(student) {
    if (student.score > currentScore) {
        currentScore = student.score;
        firstPlaceStudent = student;
    }
}
evaluateMathStudents(listStudents, getHigherScore);

log('First Place Student: ', firstPlaceStudent.name);