import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, Footer, Addfood, Needhelp, Map, Ngo, Location } from './components';

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
          <Route exact path="/addfood">
            <Header />
            <Addfood />
            <Footer />
          </Route>
          <Route exact path="/needhelp">
            <Header />
            <Needhelp />
            <Footer />
          </Route>
          <Route exact path="/ngos">
            <Header />
            <Ngo />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
