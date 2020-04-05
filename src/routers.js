import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import NewsDetail from './component/ListNews/NewsDetail/NewsDetail';

const routers = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/news-detail' component={NewsDetail} />
        </Switch>
      </Router>
    </div>
  )
};

export default routers;