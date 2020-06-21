import React from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from './pages/NotFound';

import NewBadge from "./pages/NewBadge";
import Badges from "./pages/Badges";
import RickMorty from "./pages/RickMorty";


function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/badges/new" component={NewBadge}/>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/rick-morty" component={RickMorty}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
