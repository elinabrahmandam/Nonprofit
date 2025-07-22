import { registerRootComponent } from 'expo';
import React from 'react';
import RootNavigator from '../navigation/NavigatorRoot';

const Home = () => {
  return <RootNavigator />;
};


registerRootComponent(Home);

