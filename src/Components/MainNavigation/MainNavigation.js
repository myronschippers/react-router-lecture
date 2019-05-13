import React, {Component} from 'react';

class MainNavigation extends Component {
  render() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/plants">Plants</Link>
                </li>
                <li>
                    <Link to="/animals">Animals</Link>
                </li>
            </ul>
        </nav>
    )
  }
}

export default MainNavigation;