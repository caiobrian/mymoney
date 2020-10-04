import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/list/:type" component={List} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
