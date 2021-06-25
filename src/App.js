import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, useParams, Switch } from 'react-router-dom';
import GithubCorner from './components/GithubCorner';
import "./App.css";

import Header from './components/Header';
import Menu from './components/Menu';

function Child() {
  let { id } = useParams();
  const Component = lazy(() => import(/* webpackChunkName: "[request]" */ `./pages/${id}.js`)
    .catch(() => import('./components/NotFound.js')));

  return (
    <>
      <h2 className="title">{id.replace(/-/g, ' ')}</h2>
      <Component />
    </>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="grid">
        <Menu />
        <Header />
        <main id="section-example">
          <Suspense fallback={<div>Page is Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to={process.env.PUBLIC_URL + '/simple-map'} />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/:id'} children={<Child />} />
            </Switch>
          </Suspense>
        </main>
      </div>
      <GithubCorner />
    </Router>
  );
}

export default App;