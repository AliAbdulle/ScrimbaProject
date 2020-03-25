import React from 'react';
//import TodoItem from './TodoItem'
import Nav from './Nav'
import Joke from './Joke.js';
import Footer from './Footer';
import ContactCard from './ContactCard';
//import './App.css';
//App function
function App() {

  return (
    <div>
    <div className="App">
      <Nav className="nav-bar"/>
      </div>
    {/* <TodoItem className="Todo-list"/> */}
      <div className="contacts">
            <ContactCard
                name="Mr. Whiskerson"
                imgUrl="http://placekitten.com/300/200"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />

            <ContactCard
                name="Fluffykins"
                imgUrl="http://placekitten.com/400/200"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />

            <ContactCard
                name="Destroyer"
                imgUrl="http://placekitten.com/400/300"
                phone="(212) 555-3456"
                email="ofworlds@yahoo.com"
            />
            <ContactCard
                name="Felix"
                imgUrl="http://placekitten.com/200/100"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />

        </div>
        <Joke />
      <Footer />
      </div>
  );
}

export default App;
