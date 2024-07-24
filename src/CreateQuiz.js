import React, { useContext, useState } from 'react';
import { QuizContext } from './QuizContext';
import { useNavigate } from 'react-router-dom';
import './styles.css';
const CreateQuiz = () => {
  const { addQuiz } = useContext(QuizContext); 
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: ['', ''], correctOption: 0 }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', options: ['', ''], correctOption: 0 }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = questions.map((q, i) =>
      i === index ? { ...q, [field]: value } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = questions.map((q, i) =>
      i === questionIndex
        ? {
            ...q,
            options: q.options.map((opt, j) => (j === optionIndex ? value : opt)),
          }
        : q
    );
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    const newQuiz = {
      id: Date.now().toString(), 
      title,
      questions,
    };
    addQuiz(newQuiz);
    navigate('/');
  };

  return (
    <div>
      <h2>Create New Quiz</h2>
      <div>
        <label>
          Quiz Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <label>
            Question Text:
            <input
              type="text"
              value={question.text}
              onChange={(e) => handleQuestionChange(questionIndex, 'text', e.target.value)}
            />
          </label>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                Option {optionIndex + 1}:
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                />
              </label>
            </div>
          ))}
          <label>
            Correct Option:
            <select
              value={question.correctOption}
              onChange={(e) => handleQuestionChange(questionIndex, 'correctOption', parseInt(e.target.value))}
            >
              {question.options.map((_, optionIndex) => (
                <option key={optionIndex} value={optionIndex}>
                  Option {optionIndex + 1}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default CreateQuiz;
