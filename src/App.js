import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, Footer, Addfood, Needhelp, Login, Register, Map, Ngo, Location } from './components';

// import { useEffect, useState } from 'react';


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
          <Route exact path="/"><Header />
          </Route>
          <Route exact path="/Login"><Login /></Route>
          <Route exact path="/Register"><Register /></Route>

        </Switch>
      </div>
    </Router>
  );
    
}

export default App;
