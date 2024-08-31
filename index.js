/* Q1.Find Grades
Your school has the following grading system based upon the marks (M) obtained by a student:
-- If M≤10, the grade will be E.
-- If 11≥M≤20, the grade will be D.
-- If 21≥M≤30, the grade will be C.
-- If 31≥M≤40, the grade will be B.
-- If 41≥M≤50, the grade will be A.*/

let marks = 39;
let grade;
switch (true) {
    case (marks <= 10):
        grade = "E-Grade"
        break;
    case (marks >= 11 && marks <= 20):
        grade = "D-Grade"
        break;
    case (marks >= 21 && marks <= 30):
        grade = "C-Grade"
        break;
    case (marks >= 31 && marks <= 40):
        grade = "B-Grade"
        break;
    case (marks >= 41 && marks <= 50):
        grade = "A-Grade"
        break;
    default:
        grade = "Failed"

}
console.log("You got: ", grade)

/*Q2. Get Value
You are provided with a table containing some characters and their 
corresponding values. Your task will be to find the value from the 
table corresponding to an input character and return it.
| P or p - PrepBytes |
| Z or z - Zenith |
| E or e - Expert Coder |
| D or d - Data Structure |
*/
let UserValue = "E"
let UserResult;
switch (true) {
    case ((UserValue == "P") || (UserValue == "p")):
        UserResult = "PrepBytes"
        break;
    case ((UserValue == "Z") || (UserValue == "z")):
        UserResult = "Zenith"
        break;
    case ((UserValue == "E") || (UserValue == "e")):
        UserResult = "Expert Coder"
        break;
    case ((UserValue == "D") || (UserValue == "d")):
        UserResult = "Data Structure"
        break;
    default:
        UserResult = "Invalid Input"

}
console.log(UserResult);

// Q3. Find the maximum out of three numbers.

let num1 = 20
let num2 = 14
let num3 = 18

if (num1 > num3 && num1 > num2)
    console.log(`Largest number is:  ${num1}`)
else if (num2 > num3 && num2 > num1)
    console.log(`Largest number is:  ${num2}`)
else if (num3 > num1 && num3 > num2)
    console.log(`Largest number is:  ${num3}`)
else
    console.log("You entered equal numbers!")

// Q4. Second Smallest

let snum1 = 14;
let snum2 = 13;
let snum3 = 12;

if ((snum1 > snum2 && snum1 < snum3) || (snum1 > snum3 && snum1 < snum2))
    console.log(`Second smllest number is: ${snum1}`)
else if ((snum2 > snum1 && snum2 < snum3) || (snum2 > snum3 && snum2 < snum1))
    console.log(`Second smllest number is: ${snum2}`)
else if ((snum3 > snum1 && snum3 < snum2) || (snum3 > snum2 && snum3 < snum1))
    console.log(`Second smllest number is: ${snum3}`)
else
    console.log("You entered equal numbers!")

// Q.5. Check whether the triangle is Acute or Obtuse

let angle1 = 140
let angle2 = 20
let angle3 = 20

if (angle1 + angle2 + angle3 !== 180) {
    console.log("The angles do not form a valid triangle.");
}
else {

    if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
        console.log("The triangle is acute.");
    }
    else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
        console.log("The triangle is Obtuse")
    }
    else {
        console.log("The triangle is right angle triangle")
    }

}

