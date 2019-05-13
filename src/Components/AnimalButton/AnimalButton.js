import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class AnimalButton extends Component {
    clickHandler = (event) => {
      alert('You\'re going to see Animals');
      this.props.history.push('/animals');
    }

    render() {
        return (
            <button onClick={this.clickHandler}>GO TO ANIMALS</button>
        );
    }
}

export default withRouter(AnimalButton);
