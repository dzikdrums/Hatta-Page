import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from 'views/About';
import Articles from 'views/Articles';
import Contact from 'views/Contact';
import Gallery from 'views/Gallery';
import Home from 'views/Home';
import Layout from 'layout';
import React from 'react';

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
