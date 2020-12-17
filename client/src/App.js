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
          <Route exact path="/" component={Home} />

          {/* Login Page */}
          <Route exact path="/login" component={Login} />
          

          {/* Users Page */}
          <Route exact path="/users" component={Users} />
        
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
