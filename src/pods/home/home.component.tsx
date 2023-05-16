import React from 'react';
import { Header } from "./components";
import * as classes from './home.styles';

export const Home: React.FC = () => {

  return (
    <div className={classes.root}>
      <Header />
      Home: React.FC
    </div>
  );
}
