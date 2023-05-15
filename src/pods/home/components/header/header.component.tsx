import React from 'react';
import { Navbar } from '../navbar';
import * as classes from './header.styles';

export const Header: React.FC = () => {
  return (
    <header className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.mainImg}>
          <img src="/assets/gallery/main-picture.png" alt="main-images" />
        </div>
        <div className={classes.boxTitle}>
          <h1 className={classes.title}>
            Hi, I am <br />
            <span>Flavio FORTE</span> <br />
            FrontEnd Developer
          </h1>
        </div>
      </div>
    </header>
  );
}
