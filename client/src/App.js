import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
// Pages (current total: 8)
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
    <Header />
      <div>
        <Switch>

          {/* Home Page */}
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>

          {/* Account creation Page */}
          <Route path="/signup">
            <Signup />
          </Route>

          {/* Login Page */}
          <Route exact path="/login">
            <Login />
          </Route>

          {/*Routes Below can only be accessed if user is logged in
          ---------------------------------------------------------*/}
          <AuthProvider>
            {/* New user services creation Page */}
            <PrivateRoute path="/new-user">
              <NewUser />
            </PrivateRoute>
            {/* Forgot password Page */}
            <PrivateRoute path="/forgot-password">
              <ForgotPassword />
            </PrivateRoute>
            {/* Update Profile Page !User login required! */}              
            <PrivateRoute path="/update-profile">
              <UpdateProfile />
            </PrivateRoute>            
            {/* Dashboard Page !User login required! */}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            {/* All Users catalog Page */}
            <PrivateRoute path="/users">
              <Users />
            </PrivateRoute>
          </AuthProvider>
          {/* ----------------------------------------------------- */}
        </Switch>
      </div>
    <Footer />
    </Router>
  )
};

export default App;