import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import FullBlog from "./Components/FullBlog/FullBlog";

function App() {
  return (
    <main className="bg-main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/blog=:id">
          <FullBlog />
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
