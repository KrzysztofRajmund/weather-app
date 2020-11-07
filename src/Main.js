import React from "react";
//react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./store";
//components
import SearchForm from './components/SearchForm';
import City from './components/City';
import DailyForecast from './components/DailyForecast';
import WeeklyForecast from './components/WeeklyForecast';


function Main() {
  return (
    <Provider store={store}>
      <Router>
        <SearchForm />
        <City />

        <Switch>
          <Route path="/weeklyforecast">
            <WeeklyForecast />
          </Route>

          <Route path="/">
            <DailyForecast />
          </Route>
        </Switch>
        
      </Router>
    </Provider>
  );
}

export default Main;
