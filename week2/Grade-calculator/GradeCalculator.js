'use strict'

/*
A function that calculates grades,
based on the American grading system!

Grade Score Ranges:
Grade A (90% - 100%)
Grade B (80% - 89%)
Grade C (70% - 79%)
Grade D (60% - 69%)
Grade E (50% - 59%)
Grade F (0% - 49%)
*/


function gradeCalculator (score) {
  // Convert the score into a percentage (%)
  let testScore = (parseFloat(score)/100)*100;

  // The range of the scores of students !
  let result;
  if ((testScore >= 90) && (testScore <= 100)) {
    result = 'A';
  }
  else if ((testScore >= 80) && (testScore <= 89)) {
    result = 'B';
  }
  else if ((testScore >= 70) && (testScore <= 79)) {
    result = 'C';
  }
  else if ((testScore >= 60) && (testScore <= 69)) {
    result = 'D';
  }
  else if ((testScore >= 50) && (testScore <= 59)) {
    result = 'E';
  }
  else {
    result = 'F';
  }
  return `You got a ${result} (${score})% !`;
}

/* In this project, a student did a test
and got a 60 out of 100. */
console.log(gradeCalculator(60));

