import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import HomePage from './HomePage';
import Credits from './Credits';

function App() {
  return (
    <Router>
      <div className='app'>

        <nav className="nav-header">
          <Link className="nav-items" to="/">Home</Link> 
          <Link className="nav-items" to="/credits">About</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/credits">
            <Credits />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
