var quiz = new Quiz;

var question1 = new Question("1+1=?", ["1", "2"], "1");
var question2 = new Question("1+2=?", ["3", "1"], "0");

quiz.add(question1);
quiz.add(question2);

setButton(quiz);