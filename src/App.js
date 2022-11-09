import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className='app'>

        <nav className="nav-header">
          <img src='/Images/symbol3.png 'height='160' width='auto'/> 
        </nav>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
