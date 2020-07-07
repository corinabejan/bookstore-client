import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import { selectAppLoading } from "./store/appState/selectors";
import { useSelector } from "react-redux";
import Book from "../src/pages/Book";
import BookDetails from "../src/pages/BookDetails";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const isLoading = useSelector(selectAppLoading);
  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Book} />
        <Route path="/books/:id" component={BookDetails} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
    </div>
  );
}

export default App;
