import React from 'react';
//import TodoItem from './TodoItem'
import Nav from './Nav'
import Footer from './Footer';
import ContactCard from './ContactCard';
import Joke from './Joke.js';
import JokesData from './JokesData';
//import './App.css';
//App function
function App() {

  const jokesComponents =  JokesData.map(joke => <joke key={joke.id} question={joke.question}
    punchLine={joke.punchLine} />)
      return (
        <div>
          <Nav />
          <ContactCard />
          {jokesComponents}
          <Footer />
        </div>
  );
}

export default App;
