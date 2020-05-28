import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "Pages/Products/Products";
import Cart from "Pages/Cart/Cart";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Product} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
