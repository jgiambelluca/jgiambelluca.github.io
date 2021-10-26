var class1 = prompt("first subject?");
document.write ("<li> first subject is " + class1 + "</li>");

var average = getTestAvg();
document.write("<li> first average is " + average + "</li>");
var letterGrade = getLetterGrade(average);
document.write("<li> first grade is " + letterGrade + "</li>");
var GPA = getGPA(letterGrade);
document.write("<li> first GPA is " + GPA + "</li>");

var class2 = prompt("second subject?");
document.write ("<li> second subject is " + class2 + "</li>");

var average2 = getTestAvg();
document.write("<li> second average is " + average2 + "</li>");
var letterGrade2 = getLetterGrade(average2);
document.write("<li> second grade is " + letterGrade2 + "</li>");
var GPA2 = getGPA(letterGrade2);
document.write("<li> second GPA is " + GPA2 + "</li>");

var class3 = prompt("third subject?");
document.write (" third subject is " + class3);

var average3 = getTestAvg();
document.write(average3);
var letterGrade3 = getLetterGrade(average3);
document.write(letterGrade3);
var GPA3 = getGPA(letterGrade3);
document.write(GPA3);

var class4 = prompt("fourth subject?");
document.write (" fourth subject is " + class4);

var average4 = getTestAvg();
document.write(average4);
var letterGrade4 = getLetterGrade(average4);
document.write(letterGrade4);
var GPA4 = getGPA(letterGrade4);
document.write(GPA4);

var ovrGPA = ((GPA + GPA2 + GPA3 + GPA4)/4);
document.write(" your overall GPA is " + ovrGPA);



//Define functions below here

function getTestAvg(){
  
  var tst1 = Number(prompt("What is you test1 score?"));
  var tst2 = Number(prompt("What is you test2 score?"));
  var tst3 = Number(prompt("What is you test3 score?"));
  var tst4 = Number(prompt("What is you test4 score?"));

  
  var avg = ((tst1 +tst2 + tst3 + tst4)/4);
  return avg;
}

function getLetterGrade(avg){
  
  if (avg >=93){
    return "A";
   }
    else if (avg >=85){
    return "B";
    }
    else if (avg >=75){
    return "C";
    }
     else if (avg >=67){
    return "D";
     }
   else{
    return "F";
   }
  
}
 
function getGPA(letterGrade){
  if (letterGrade === "A"){
    return 4.0;
  }
  else if (letterGrade === "B"){
    return 3.0;
  }
  else if (letterGrade === "C"){
    return 2.0;
  }
  else if (letterGrade === "D"){
    return 1.0;
  }
  else if (letterGrade === "F"){
    return 0.0;
  }
}


