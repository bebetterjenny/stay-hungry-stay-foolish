//sentenc: string
//choice: array
//answer: boolean

function Question(sentence, choice, answer) {
  this.sentence = sentence;
  this.choice = choice;
  this.answer = answer;
  this.isDisplaying = false;
}


Question.prototype.display = function() {
  this.isDisplaying = true;
}

Question.prototype.hide = function() {
  this.isDisplaying = false;
}



Question.prototype.toHTML = function() {
  if(this.isDisplaying) {
    document.getElementById('question').innerHTML = this.sentence;
    document.getElementById('choice0').innerHTML = this.choice[0];
    document.getElementById('choice1').innerHTML = this.choice[1];
    
  }  

}