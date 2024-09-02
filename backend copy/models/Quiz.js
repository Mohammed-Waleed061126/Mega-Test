const fs = require('fs');
const path = require('path');

class Quiz {
  constructor() {
    this.questions = [];
    this.loadQuestions();
    this.selectedQuestions = this.selectRandomQuestions(10);
    this.answers = [];
  }

  // Load questions from the JSON file
  loadQuestions() {
    const data = fs.readFileSync(path.resolve(__dirname, 'data/questions.json'), 'utf-8');
    this.questions = JSON.parse(data);
  }

  // Select 10 random questions from the list of 100 questions
  selectRandomQuestions(count) {
    const shuffled = this.questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Store the user's answer for a specific question
  submitAnswer(questionIndex, answer) {
    this.answers[questionIndex] = answer;
    console.log(answer);
    
  }

  // Calculate the percentage of correct answers
  calculateScore() {
    let correctAnswers = 0;
    this.selectedQuestions.forEach((question, index) => {
      if (question.correctAnswer === this.answers[index]) {
        correctAnswers++;
      }
    });
    return (correctAnswers / this.selectedQuestions.length) * 100;
  }

  // Return the selected questions to the frontend
  getSelectedQuestions() {
    return this.selectedQuestions.map(({ question, answers }) => ({
      question,
      answers,
    }));
  }
}

module.exports = Quiz;