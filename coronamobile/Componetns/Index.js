
import React from 'react';

import Home from './Home';
import Bangladesh from './Bangladesh';
import District from './AllDistrict';
import SearchByCounty from './SearchByCountry';
import { NativeRouter,Switch,Route } from 'react-router-native';

export default function Index() {
  return (
    <NativeRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bd" component={Bangladesh} />
            <Route exact path="/district" component={District}/>
            <Route exact path="/search" component={SearchByCounty}  />
        </Switch>
    </NativeRouter>
  );
}

