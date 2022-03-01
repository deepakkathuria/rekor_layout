import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignInSide from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Student from './components/Student/Layout/StudentLayout';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route exact path="/student" component={Student} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
