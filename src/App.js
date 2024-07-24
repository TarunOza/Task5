import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import QuizList from './QuizList';
import TakeQuiz from './TakeQuiz';
import CreateQuiz from './CreateQuiz';
import { QuizProvider } from './QuizContext';
import './styles.css';
const App = () => {
  return (
    <QuizProvider>
      <Header />
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/take/:id" element={<TakeQuiz />} />
      </Routes>
    </QuizProvider>
  );
};

export default App;
