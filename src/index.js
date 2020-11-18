import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Home from './views/Home'
import Login from './views/Login'
import Articles from './views/Articles'
import Myprofile from './views/MyProfile'
import Notification from './views/Notification'
import ArticleOnly from './views/ArticleOnly'
import Tags from './views/Tags'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/articles'>
          <Articles />
        </Route>
        <Route path='/myprofile'>
          <Myprofile />
        </Route>
        <Route path='/notifications'>
          <Notification />
        </Route>
        <Route path='/article/:id_article'>
          <ArticleOnly />
        </Route>
        <Route path='/tag/:name_tag'>
          <Tags />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
