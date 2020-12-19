import React from "react";
// import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Header from "./components/Header/index";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
    <Header />
    {/* <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }} */}
    
      <div>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
      </div>
    {/* </Container> */}
    </Router>
  )
};

export default App;