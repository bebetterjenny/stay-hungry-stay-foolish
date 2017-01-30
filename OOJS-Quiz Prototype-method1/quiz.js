function Quiz() {
  this.questions = [];
  this.questionIndex = 0;
  this.score = 0;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
}

Quiz.prototype.display = function() {
  var currentQuestion = this.questions[this.questionIndex];
  currentQuestion.display();
}

Quiz.prototype.next = function() {
  var currentQuestion = this.questions[this.questionIndex];
  currentQuestion.hide();
  this.questionIndex ++;
  if(this.questionIndex === this.questions.length) {
    this.questionIndex = 0;
    var scoreHTML = 'Your score: ';
    scoreHTML += this.score;
    scoreHTML += '/';
    scoreHTML += this.questions.length;
    scoreHTML += '.';
    alert(scoreHTML);
  }
  this.display();
}

Quiz.prototype.getAnswer = function() {
  return this.questions[this.questionIndex].answer;
}

Quiz.prototype.renderInElement = function() {
  var currentQuestion = this.questions[this.questionIndex];
  this.display();
  for(var i = 0; i<this.questions.length; i++) {
    this.questions[i].toHTML();
  }  
   
  var progressHTML = 'Question ';
  progressHTML += this.questionIndex + 1;
  progressHTML += ' of ';
  progressHTML += this.questions.length;
  
  document.getElementById('progress').innerHTML = progressHTML;
}

Quiz.prototype.addScore = function() {
  this.score ++;
}