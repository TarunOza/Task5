import React from 'react';
import './styles.css';
import './styles.css';
const QuizItem = ({ quiz }) => {
  return (
    <li className="quiz-item">
      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>
      <button>Take Quiz</button>
    </li>
  );
};

export default QuizItem;
