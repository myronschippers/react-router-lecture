# React View Routing

Using a new dependency of `react-router-dom` we learn how leverage a FE router alowing us to alter the page content without reloading a new page and losing all of our data.

## Basic Routing

Let's add react router to our project:

```
npm install react-router-dom
```

In `App.js`, let's add a few of our page components:

```JSX
<Home />
<Plants />
<Animals />
```

Great! Now all three show up, but we only want to show one at a time depending on the URL. This is when we'll bring `react-router-dom` into our project:

```JSX
import { HashRouter as Router, Route } from "react-router-dom";
```

Now wrap everything in your render `return` inside of a `Router` tag:

```JSX
<Router>
    <div className="App">
        <Home />
        <Plants />
        <Animals />
    </div>
</Router>
```

Now we're going to determine which view is shown based on the URL path:

```JSX
<Route path="/" component={Home} />
<Route path="/plants" component={Plants} />
<Route path="/animals" component={Animals} />
```

You can think of these as `if` blocks. If our `path` matches, show that `component`. `path` is our URL matcher and `component` is the component we want to show when we match that route. One thing that's weird is that the `Home` Component is showing up everywhere. That's because `/` matches all of these (`/plants` and `/animals` both include `/`). If we only want it to show the home component when it matches `/` exactly, we have to include the word `exact`.

```JSX
<Route exact path="/" component={Home} />
```

## Linking

These routes should now be working when we go to `localhost:3000`, `localhost:3000/#/plants`, and `localhost:3000/#/animals`, but no user will type those in. We need links. Let's add `Link` to our `import`.

```JSX
import { HashRouter as Router, Route, Link } from "react-router-dom";
```

Now add links to the render and it should look like this:

```JSX
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

// Page components
import Home from './pages/Home/Home';
import Plants from './pages/Plants/Plants';
import Animals from './pages/Animals/Animals';

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <div className="App">
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

            <Route exact path="/" component={Home} />
            <Route path="/plants" component={Plants} />
            <Route path="/animals" component={Animals} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
```

## Change View Programmatically

`Link` components are great if all we want to do is change where we are. But what if we want to do other things, too? We'd need to change view after we do other things. Which a `Link` can't do...

Let's add a button to our Home Component.  `onClick` let's fire a function that makes an alert, and then changes where we are.

```jsx
import React, {Component} from 'react';

class Home extends Component {
    
    handleClick = () => {
      alert("You are headed to animals");
      ///CHANGE LOCATION???
    }
    
    render() {
      return (
        <div>
          <h2>Home</h2>
          <button onClick={this.handleClick} />
        </div>
      )
  };
}
export default Home;
```


But how??

Thankfully, we have the ability to do so!
When you make a `Route`, say 
```JSX
<Route exact path="/" component={Home} />
```
The component rendered gets some props passed to it for free!
Try `console.log(this.props)` in the render of your Home Component.
You get an array called `history` and an object called `match`. 

`history` is the key here! It's an array of everywhere we've been, and the last entry is where we are!

To change where we are, we will just `push` a new location to the array!

```jsx
handleClick = () => {
    alert("You are headed to animals");
    ///CHANGE LOCATION???
    this.props.history.push('/animals')
}  
```
