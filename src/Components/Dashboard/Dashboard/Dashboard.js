import React from "react";
import { Switch, Route } from "react-router-dom";
import AddBlog from "../AddBlog/AddBlog";
import DashboardNav from "../DashboardNav/DashboardNav";

const Dashboard = () => {
  return (
    <section>
      <DashboardNav />
      <Switch>
        <Route path="/dashboard/addBlog">
          <AddBlog />
        </Route>
      </Switch>
    </section>
  );
};

export default Dashboard;
