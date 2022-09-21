import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import MainSearch from "./containers/MainSearch";
import ViewBilling from "./containers/ViewBilling";
import Dashboard from './containers/Dashboard';
import Projects from "./containers/Projects";
import NewUser from "./containers/NewUser";
import Users from "./containers/Users";
import NewProject from "./containers/Newproject";
import MainSearchResults from "./containers/PatientSearchResults";
import MainTab from "./components/TabView";
import AppliedRoute from "./components/AppliedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/projects" exact component={Projects} props={childProps} />
    <AppliedRoute path="/dashboard" exact component={Dashboard} props={childProps} />
    <AppliedRoute path="/newuser" exact component={NewUser} props={childProps} />
    <AppliedRoute path="/newproject" exact component={NewProject} props={childProps} />
    <AppliedRoute path="/users" exact component={Users} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

