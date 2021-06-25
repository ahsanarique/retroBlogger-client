import React from "react";
import { Switch, Route } from "react-router-dom";
import AddBlog from "../AddBlog/AddBlog";
import DashboardNav from "../DashboardNav/DashboardNav";
import AllBlogs from "../AllBlogs/AllBlogs";

const Dashboard = () => {
  return (
    <section className="relative min-h-screen md:flex">
      <DashboardNav />

      <Switch>
        <Route path="/dashboard/blogList">
          <AllBlogs />
        </Route>

        <Route path="/dashboard/addBlog">
          <AddBlog />
        </Route>
      </Switch>
    </section>
  );
};

export default Dashboard;
