import React, {Component} from 'react';

class Home extends Component {
  handleClick = (event) => {
    alert('You are headed to animals.');
    // CHANG LOCATION???
    this.props.history.push('/animals');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>HOME</h1>
        <button onClick={this.handleClick}>GO TO ANIMALS</button>
      </div>
    )
  }
}

export default Home;