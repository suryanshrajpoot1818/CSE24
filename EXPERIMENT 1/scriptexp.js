function calculateResult(){

    var n = document.getElementById("subjects").value;

    var total = 0;

    for(var i = 1; i <= n; i++){
        var marks = parseFloat(prompt("Enter marks for subject " + i));
        total = total + marks;
    }

    var average = total / n;

    var grade;

    if(average >= 90){
        grade = 'A+';
    }
    else if(average >= 75){
        grade = 'A';
    }
    else if(average >= 60){
        grade = 'B';
    }
    else if(average >= 50){
        grade = 'C';
    }
    else if(average >= 33){
        grade = 'D';
    }
    else{
        grade = 'F';
    }

    var result;

    if(average >= 40){
        result = "PASS";
    }
    else{
        result = "FAIL";
    }

    document.getElementById("result").innerHTML=
    "Total Marks = " + total + "<br>" +
    "Average = " + average + "<br>" +
    "Grade = " + grade + "<br>" +
    "Result = " + result;

}