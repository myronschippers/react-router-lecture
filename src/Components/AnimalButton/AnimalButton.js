import React, {Component} from 'react';

class AnimalButton extends Component {
  handleClick = () => {
      alert("You are headed to animals");
      ///CHANGE LOCATION???
      this.props.history.push('/animals')
    } 

    render() {
      return (
        <button onClick={this.handleClick}>GO TO ANIMALS</button>
      )
    }
}

export default AnimalButton