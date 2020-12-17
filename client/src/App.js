import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
        <Header />
        {/* Routes */}
        <Switch>

          {/* Home Page */}
          <Route path={["/", "/home"]}>
            <Home />
          </Route>

          {/* Login Page */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Users Page */}
          <Route path="/users">
            <Users />
          </Route>
          
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
