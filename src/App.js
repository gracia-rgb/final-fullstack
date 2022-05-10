import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotFound from "./screens/NotFound";
import Admin from "./screens/Admin";
import List from "./screens/List";
import Order from "./screens/Order";
import LoginAdmin from "./screens/LoginAdmin";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:uid/home" component={HomeScreen} exact />
        <Route exact path="/:uid/:productID" component={SingleProduct} />
        <Route exact path="/" component={Login} />
        <Route path="/:uid/menu/admin" component={Admin} />
        <Route path="/register" component={Register} />
        <Route path="/:uid/profile/profile" component={ProfileScreen} />
        <Route path="/:uid/menu/shipping" component={ShippingScreen} />
        <Route path="/loginadmin" component={LoginAdmin} />
        <Route path="/:uid/or/order" component={Order} />
        <Route path="/:uid/barang/list" component={List} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
