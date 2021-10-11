import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, Footer, Addfood, Needhelp, Login, Register, Map, Ngo, Location, Resume, Demo, Treat, Govtschemes, Donate  } from './components';





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
            {/* <Footer /> */}
          </Route>

          <Route exact path="/needhelp">
            <Header />
            <Needhelp />
            <div className="space"></div>
            <Footer />
          </Route>

          <Route exact path="/donate">
            <Header />
            <Donate />
            <Footer />
          </Route>

          <Route exact path="/ngos">
            <Header />
            <Ngo />
            <Footer />
          </Route>

          <Route exact path="/govtschemes">
            <Header />
            <Govtschemes />
            <Footer />
          </Route>

          <Route exact path="/treat">
            <Header />
            <Treat />
            <Footer />
          </Route>

          <Route exact path="/Login"><Login /></Route>
          <Route exact path="/Register"><Register /></Route>

        </Switch>
      </div>
    </Router>
  );

}

export default App;
