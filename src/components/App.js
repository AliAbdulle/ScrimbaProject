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
        <div>
            <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
            
            <Joke 
                question="What's the best thing about Switzerland?" 
                punchLine="I don't know, but the flag is a big plus!"
            />
            
            <Joke 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />
            
            <Joke 
                question="Hear about the new restaurant called Karma?" 
                punchLine="There’s no menu: You get what you deserve."
            />
            
            <Joke 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />
            
            <Joke 
                question="Did you hear about the claustrophobic astronaut?" 
                punchLine="He just needed a little space."
            />
            
        </div>
      <Footer />
      </div>
  );
}

export default App;
