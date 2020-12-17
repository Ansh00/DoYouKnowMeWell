var readlineSync=require("readline-sync");
var score=0;

var name=readlineSync.question("What's your name:-");
console.log("Welcome "+name+" Do You Know Ansh?");

function play(question,answer)
{
  var userAns=readlineSync.question(question);

  if(userAns==answer)
  {
    console.log("You are Right!");
    score++;
  }
  else
  {
    console.log("You are Wrong!")
  }
  console.log("Your current score is:", score);
  console.log("=============");
  console.log("");
}
var questions=[
  {
    question:"Where do I live?"
    ,
    answer :"bhopal"
  }
  ,
  {
    question:"What's my favorite Food?",
    answer:"maggie"
  }
  ,
  {
    question:"What's my favorite Movie?",
    answer:"the package"
  }
];
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Yipeee,Your score is: ",score);
