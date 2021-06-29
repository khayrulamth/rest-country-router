import './App.css';
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import CountryDetails from './components/CountryDetails/CountryDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/country/:countryCode">
          <CountryDetails></CountryDetails>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
