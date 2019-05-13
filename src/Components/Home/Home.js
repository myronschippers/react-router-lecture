import React, {Component} from 'react';
import AnimalButton from '../AnimalButton/AnimalButton';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>HOME</h1>
        <AnimalButton />
      </div>
    )
  }
}

export default Home;