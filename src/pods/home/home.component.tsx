import React from 'react';
import { BodyComponent, Footer, Header } from "./components";
import * as classes from './home.styles';

export const Home: React.FC = () => {

  return (
    <div className={classes.root}>
      <Header />
      <BodyComponent />
      <Footer />
    </div>
  );
}
