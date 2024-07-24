import React from 'react';
import './styles.css';
import './styles.css';
const Header = () => {
  return (
    <header className="header">
      <h1>Quiz Platform</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/create">Create Quiz</a></li>
          <li><a href="/take">Take Quiz</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
