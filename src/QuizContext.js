// QuizContext.js
import React, { createContext, useState } from 'react';
import './styles.css';
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]);

  // Function to add a new quiz
  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  return (
    <QuizContext.Provider value={{ quizzes, addQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
