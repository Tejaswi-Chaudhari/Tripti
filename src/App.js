import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, Footer, Location } from './components';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <Location />
          <Footer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
