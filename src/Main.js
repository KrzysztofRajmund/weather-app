import React, { Component } from 'react'
//react-router
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./store";
//components
import SearchForm from './components/SearchForm';
import WeeklyForecast from './components/WeeklyForecast';


const Main = (props) => {

  return (
    <Provider store={store}>
      {/* <Router> */}
        <SearchForm />
      

        {/* <Switch> */}
          {/* <Route path="/weeklyforecast"> */}
            {/* <WeeklyForecast /> */}
          {/* </Route> */}

          {/* <Route path="/"> */}
        
          {/* </Route> */}
        {/* </Switch> */}
        
      {/* </Router> */}
    </Provider>
  );
  }


export default Main;

