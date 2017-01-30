function setButton(quiz) {
  quiz.renderInElement();
  var correctButton = document.getElementById('guess' + quiz.getAnswer());
  var wrongButton = document.querySelector('.btn--default:not(#guess' + quiz.getAnswer() + ')');
  
  correctButton.onclick = function() {
    console.log("correct");
    quiz.addScore();
    quiz.next();
    setButton(quiz);
    console.log(quiz.score);
  }
  
  wrongButton.onclick = function() {
    console.log("wrong");
    quiz.next();
    setButton(quiz);
    console.log(quiz.score);
  }
}