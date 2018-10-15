import React from 'react';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import Header from '../header/header';

//! Vinicio - in code, components are classes that extend from React.Component

class App extends React.Component {
  //! Vinicio - props are the main way of communication in REACT
  constructor(props) {
    super(props); // Initialize everything on React's side of the component

    this.state = {
      content: cowsay.say({ text: 'Gregor is Cute' }),
    };
    this.handleFaker = this.handleFaker.bind(this);
  }

  //! Vinicio -arrow functions are going te be pre-bound to the class itself
  handleFaker = () => {
    //! Vinicio - setState is an ASYNC function
    this.setState(() => {
      // Here. I'm going to return the state of the application
      return {
        content: cowsay.say({ text: faker.lorem.words(6) })}
    });
    //! Vinicio code here will run immediately
  };

  //! React components NEED to have one render function in every component
  render() {
    return (
      <div className='normal-class'>
      <Header/> { /* new Header().render(); */ }
    <button onClick={this.handleFaker}>Generate New Cow</button>
        <pre>{ this.state.content }</pre>
    </div>
    ); //! Vinicio - every return function will return JSX
  }
}

//! Vinicio - export default, means I'm only exporting ONE entity
export default App;
