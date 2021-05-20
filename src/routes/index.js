import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookDetails from "../components/BookDetails";
import CartPage from "../components/CartPage";
import ListingPage from "../components/ListingPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/books/:bookId">
          <BookDetails />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/">
          <ListingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
