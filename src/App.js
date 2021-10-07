import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, Footer, Addfood, Needhelp, Map, Ngo } from './components';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Map />
                        <Header />
                        <Home />
                        <Addfood />
                        <Needhelp />
                        <Ngo />
                        <Footer />
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}

export default App;
