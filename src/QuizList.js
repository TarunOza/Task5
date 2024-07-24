import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from './QuizContext';
import './styles.css';
const QuizList = () => {
  const { quizzes } = useContext(QuizContext);

  return (
    <div>
      <h2>Available Quizzes</h2>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h3>{quiz.title}</h3>
          <Link to={`/take/${quiz.id}`}>Take Quiz</Link>
        </div>
      ))}
      <Link to="/create">Create New Quiz</Link>
    </div>
  );
};

export default QuizList;
