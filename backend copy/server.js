const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Quiz = require('./models/Quiz');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const quiz = new Quiz();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

app.post('/api/users/quiz/submit', (req, res) => {
  const { answers } = req.body;

  // Ensure answers array length matches the number of questions
  if (answers.length !== quiz.selectedQuestions.length) {
    return res.status(400).json({ error: 'Invalid number of answers' });
  }

  // Store answers in the Quiz instance
  answers.forEach((answer, index) => {
    quiz.submitAnswer(index, answer);
  });

  // Calculate score
  const score = quiz.calculateScore();

  // Send the score back to the client
  res.json({ score });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

