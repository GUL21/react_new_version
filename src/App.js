import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
 
import './App.css';
 
class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
 
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/news" component={News} />
            <Route path="/profile" component={Profile} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
 
}
 
class Home extends React.Component {
 
  render()  {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
 
class Login  extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
        <input type="text" placeholder="Your name" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
 
class News extends React.Component {
  render( ) {
    return (
      <div>
        <h2>News1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo error dolorem et magnam eius, illum dignissimos odio, iusto aliquam commodi saepe laborum amet illo enim. Enim animi, ad adipisci tenetur.</p>
        <h2>News2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo error dolorem et magnam eius, illum dignissimos odio, iusto aliquam commodi saepe laborum amet illo enim. Enim animi, ad adipisci tenetur.</p>
        <h2>News3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo error dolorem et magnam eius, illum dignissimos odio, iusto aliquam commodi saepe laborum amet illo enim. Enim animi, ad adipisci tenetur.</p>
      </div>
    );
  }
}
 
class Profile extends React.Component {
  render()  {
    return (
      <div>
        <h2>Welcome!</h2>
        <h3>
          Check your own profile.
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio recusandae debitis ducimus doloremque iure ullam iste sunt, dolorum harum id mollitia incidunt architecto corrupti, assumenda dignissimos ipsam vel, fuga a!</p>
      </div>
    );
  }
}
 
export default App;