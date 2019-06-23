// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'teacher'
}

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/




// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
})
*/

/*
// Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'John',
    age: 26
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/


/*
// Passing functions as arguments

var years = [1990, 1995, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);
console.log(arrayCalc(ages, isFullAge));
console.log(arrayCalc(ages, maxHeartRate));



// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Zack');
*/


// IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(
    function () {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)();

(
    function (goodluck) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodluck);
    }
)(5);
*/


/*
// Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/


/*
// Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentaation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' 
            + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' 
            + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice '
            + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentaation('formal', 'morning');

john.presentaation.call(emily, 'friendly', 'afternoon');

john.presentaation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentaation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentaation.bind(emily, 'formal');

emilyFormal('afternoon');



var years = [1990, 1995, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


// Challenge 7
/*
var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers,
    this.correctAnswer = correctAnswer;
};

var question1 = new Question('What is my name?', {
    0: 'Zack',
    1: 'Other'
}, 0);

var question2 = new Question('Is Javascript fun?', {
    0: 'Yes',
    1: 'No'
}, 0);

var question3 = new Question('What is the name of the instructor?', {
    0: 'Mark',
    1: 'Zack',
    2: 'Jonas'
}, 2);

var question4 = new Question('Is Java short for Javascript?', {
    0: 'Yes',
    1: 'No'
}, 0);

var questions = [question1, question2, question3, question4];

function checkAnswer(answer, correctAnswer) {
    if (answer == correctAnswer) {
        console.log('Good Job!');
    } else {
        console.log('Wrong Answer!');
    }
}

(function randomQuestion(questions) {
    var questionNumber = Math.floor(Math.random() * 4);
    console.log(questions[questionNumber].question);
    for(key in questions[questionNumber].answers) {
        console.log(key + ': ' + questions[questionNumber].answers[key]);
    }
    var answer = window.prompt('Please enter an answer');
    checkAnswer(answer, questions[questionNumber].correctAnswer);
})(questions);
*/

var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers,
    this.correctAnswer = correctAnswer;
};

var question1 = new Question('What is my name?', {
    0: 'Zack',
    1: 'Other'
}, 0);

var question2 = new Question('Is Javascript fun?', {
    0: 'Yes',
    1: 'No'
}, 0);

var question3 = new Question('What is the name of the instructor?', {
    0: 'Mark',
    1: 'Zack',
    2: 'Jonas'
}, 2);

var question4 = new Question('Is Java short for Javascript?', {
    0: 'Yes',
    1: 'No'
}, 0);

var questions = [question1, question2, question3, question4];

var score = 0;

function checkAnswer(answer, correctAnswer) {
    if (answer == correctAnswer) {
        console.log('Good Job!');
        score++;
        console.log('Your current score is: ' + score);
    } else {
        console.log('Wrong Answer!');
        console.log('Your current score is: ' + score);
    }
}

(function randomQuestion(questions) {
    var questionNumber = Math.floor(Math.random() * 4);

    console.log(questions[questionNumber].question);
    for(key in questions[questionNumber].answers) {
        console.log(key + ': ' + questions[questionNumber].answers[key]);
    }
    var answer = window.prompt('Please enter an answer');
    checkAnswer(answer, questions[questionNumber].correctAnswer);
    if ( answer !== 'exit' ) {
        randomQuestion(questions);
    }
})(questions);
