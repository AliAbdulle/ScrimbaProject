import React from 'react';
import TodoItem from './TodoItem'
import Nav from './Nav'
import Footer from './Footer';
//import './App.css';
//App function
function App() {
  
  return (
    <div className="App">
      <Nav className="nav-bar"/>
      <TodoItem className="Todo-list"/>
      <Footer />
    </div>
  );
}

export default App;
