import { Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <NavigationBar />
          <Home />
        </Route>

        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
