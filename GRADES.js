function getGrade(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            return "A";
        case (score >= 80 && score < 90):
            return "B";
        case (score >= 70 && score < 80):
            return "C";
        case (score >= 60 && score < 70):
            return "D";
        case (score < 60 && score >= 0):
            return "F";
        default:
            return "Invalid score";
    }
}


console.log(getGrade(97)); 
console.log(getGrade(82)); 
console.log(getGrade(77)); 
console.log(getGrade(61)); 
console.log(getGrade(55)); 
console.log(getGrade(105));