// Assignment 5
// Answer 1

let a = 10;
document.write('The value of a is: <b>${a}</b> <br>');
document.write('The value of ++a is: <b>${++a}</b> <br>');
document.write('Now the value of a is: <b>${a}</b> <br>');
document.write('The value of a++ is: <b>${a++}</b> <br>');
document.write('Now the value of a is: <b>${a}</b> <br>');
document.write('The value of --a is: <b>${--a}</b> <br>');
document.write('Now the value of a is: <b>${a}</b> <br>');
document.write('The value of a-- is: <b>${a--}</b> <br>');
document.write('Now the value of a is: <b>${a}</b> <hr>');

// Answer 2
let w = 2;
let s = 1;
let results = --w - --s + ++s + s--;
document.write(`The Value of w At Last is <b> ${w} </b> <br>`);
document.write(`The Value of s At Last is <b> ${s} </b> <br>`);
document.write(`The Final Result Of The Calculation is <b> ${results} </b> <hr>`);

// Answer 3

let userInput = prompt("Enter Your Name");
alert(`Welcome ${userInput} To My Web Page`);

// Answer 4

let tableNumber = +prompt("Enter a Number Of Table You Want To Print", 5);
for (let i = 1; i <= 10; i++) {
    document.write(`${tableNumber} X ${i} = <b>${tableNumber * i}</b> <br>`);
}

// Answer 5

var subject1 = prompt("Enter name of subject 1:");
var subject2 = prompt("Enter name of subject 2:");
var subject3 = prompt("Enter name of subject 3:");
var totalMarks = 100;
var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalMarksAllSubjects = totalMarks * 3;
var percentage = (totalObtainedMarks / totalMarksAllSubjects) * 100;
document.write("<h2>Subject Marks Calculation</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td colspan='2'>Total</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");