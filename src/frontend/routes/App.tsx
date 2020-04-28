import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Banner name="Juanjo" />
      </Route>
      <Route path="/home">
        <Banner name="Juanjo 2" />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default App;
