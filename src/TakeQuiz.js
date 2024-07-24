
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { QuizContext } from './QuizContext';
import './styles.css';
const TakeQuiz = () => {
  const { id } = useParams();
  const { quizzes } = useContext(QuizContext);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const quiz = quizzes.find((quiz) => quiz.id === id);
    setActiveQuiz(quiz);
  }, [id, quizzes]);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    activeQuiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctOption) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
  };

  if (!activeQuiz) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{activeQuiz.title}</h2>
      {activeQuiz.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <p>{question.text}</p>
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="radio"
                name={`question-${questionIndex}`}
                value={optionIndex}
                checked={answers[questionIndex] === optionIndex}
                onChange={() => handleAnswerChange(questionIndex, optionIndex)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && <div>Your score: {score}/{activeQuiz.questions.length}</div>}
    </div>
  );
};

export default TakeQuiz;
