import React from 'react';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import Header from '../header/header';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: cowsay.say({ text: 'Gregor is Cute' }),
    };
    this.handleFaker = this.handleFaker.bind(this);
  }
  handleFaker = () => {
    this.setState(() => {
      return {
        content: cowsay.say({ text: faker.lorem.words(6) })}
    });
  };

  render() {
    return (
      <div className='normal-class'>
      <Header/> { /* new Header().render(); */ }
    <button onClick={this.handleFaker}>Generate New Cow</button>
        <pre>{ this.state.content }</pre>
    </div>
    );
  }
}
export default App;
