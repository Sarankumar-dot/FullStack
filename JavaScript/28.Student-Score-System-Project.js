const students = [];

// adding students

function addStudents(name , marks){
   marks = Number(marks) ?? 0;
   name = name.trim().toUpperCase();

   students.push({name:name , marks:marks});
}



// addingGrade to existing array

function addGrade(){
   return students.map((value) =>{
        let grade = "F";

        if(value.marks >=90){
            grade = "O";
        }else if(value.marks >= 80){
            grade = "A";
        }else if(value.marks >= 65){
            grade = "C";
        }else if(value.marks >= 50){
            grade = "D"
        }

       return {...value , grade:grade};
    })
}

// or else you can directly add it to the original students arrays
function addGrade2() {
  students.forEach((student) => {
    let grade = "F";

    if (student.marks >= 90) {
      grade = "O";
    } else if (student.marks >= 80) {
      grade = "A";
    } else if (student.marks >= 65) {
      grade = "C";
    } else if (student.marks >= 50) {
      grade = "D";
    }

    student.grade = grade; // ✅ adds grade into same object
  });
}


// top scores in students

function topScores(){
    console.log();
     console.log("top scores are");
    return students.filter((value) =>{
        return value.marks >= 85;
    })
}

// console.log(topScores());

// finding a student  with name

function findStudent(name){
    console.log();
    console.log("finding student " , name)
    return students.filter((value) =>{
        return value.name == name.toUpperCase();
    })
} // OR ELSE WE CAN ALSO USE THE FIND method WHICH returns THE FIRST ELEMENT THAT MATCHES

// console.log(findStudent("SARAN"));

// finding every student is passed or not

function hasFailures(){
    console.log();
    return students.some((value) =>{
        return value.marks < 50;
    })
}

// console.log(hasFailures());

// displaying all datas

function display(){
    let ans = addGrade();
    console.log("students data")
    console.log("NAME | SCORE | GRADE");

    ans.forEach((value) =>{
        console.log(`${value.name} | ${value.marks} | ${value.grade}`);
    })
}

addStudents("saran","98");
addStudents("irfan","90");
addStudents("vignesh","70");
addStudents("hh","10");

// console.log(addGrade());
display();

// top scores
console.log(topScores());

// find students
console.log(findStudent("saran"));

// check for hasFailures
console.log(hasFailures() ? "yes some of them failed" : "nobody got failed");


// after adding in the existing array
addGrade2();
console.log(students);
