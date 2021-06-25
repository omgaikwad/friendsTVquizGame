var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ");
console.log("Welcome ", userName,"!");
console.log("Lets play F.R.I.E.D.S quiz game! ")
console.log("There will be 10 question each having two options, type '1' to choose first option or type '2' to choose second option ");

var score = 0;

question1 = {
  question: "1. Which character has a twin? 1-Rachel  2-Phoebe: ",
  answer: "2"
};
question2 = {
  question: "2. Who was Monica’s first kiss? 1-Chandler 2-Ross: ",
  answer: "2"
};
question3 = {
  question: "3. How many sisters does Joey have? 1-6 2-7: ",
  answer: "2"
};
question4 = {
  question: "4. How many times has Ross been married? 1-3 2-4: ",
  answer: "1"
};
question5 = {
  question: "5. What nickname did Monica’s dad give her? 1-Tiny Electronica 2-Little Harmonica: ",
  answer: "2"
};
question6 = {
  question: "6. What does Chandler’s dad’s job? 1-He's an Elvis impesonator in Vegas 2-He's a dragon queen in vegas: ",
  answer: "2"
};
question7 = {
  question: "7. What's the name of the dancer Joey lived with? 1-Janine 2-Janice: ",
  answer: "1"
};
question8 = {
  question: "8. Who got their own spinoff? 1-Chandler 2-Joey: ",
  answer: "2"
};
question9 = {
  question: "9. What’s Phoebe’s sister’s name? 1-Ariel 2-Ursula: ",
  answer: "2"
};
question10 = {
  question: "10. What is Rachel scared of? 1-Dogs 2-Swings: ",
  answer: "2"
};

function quiz(question, answer){
  var userAns = readlineSync.question(question)
  if(userAns === answer){
    console.log("Correct Answer! ");
    score++;
  }
  else{
    console.log("Wrong Answer! ");
  }
  console.log("Your score is: ", score);
  console.log("-------------------------------");
}

var questionSet = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

for(var i=0; i<questionSet.length; i++){
  quiz(questionSet[i].question, questionSet[i].answer);
}

console.log("Your Final Score out of 10 is: ", score);
console.log("Thank you for playing the Quiz!");