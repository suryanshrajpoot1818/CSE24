var employees = [];

function addEmployee(){

    var id = document.getElementById("empId").value;
    var salary = Number(document.getElementById("salary").value);
    var dept = document.getElementById("dept").value;

    var emp = {
        empId: id,
        salary: salary,
        department: dept
    };

    employees.push(emp);

    document.getElementById("output").innerHTML = "Employee Added!";
}

function displayEmployees(){

    var text = "";

    for(var e of employees){
        text += "ID: " + e.empId +
        " | Salary: " + e.salary +
        " | Department: " + e.department + "<br>";
    }

    document.getElementById("output").innerHTML = text;
}

function filterSalary(){

    var highSalary = employees.filter(function(e){
        return e.salary > 50000;
    });

    var text = "";

    for(var e of highSalary){
        text += "ID: " + e.empId +
        " | Salary: " + e.salary +
        " | Department: " + e.department + "<br>";
    }

    document.getElementById("output").innerHTML = text;
}

function totalSalary(){

    var total = 0;

    for(var e of employees){
        total += e.salary;
    }

    document.getElementById("output").innerHTML = "Total Salary = " + total;
}

function averageSalary(){

    var total = 0;

    for(var e of employees){
        total += e.salary;
    }

    var avg = total / employees.length;

    document.getElementById("output").innerHTML = "Average Salary = " + avg;
}

function countDepartment(){

    var dept = prompt("Enter Department Name");

    var count = 0;

    for(var e of employees){
        if(e.department == dept){
            count++;
        }
    }

    document.getElementById("output").innerHTML =
    "Employees in " + dept + " department = " + count;
}