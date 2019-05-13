import React, {Component} from 'react';

class Home extends Component {
  handleClick = (event) => {
    alert('You are headed to animals.');
    // CHANG LOCATION???
  }

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default Home;