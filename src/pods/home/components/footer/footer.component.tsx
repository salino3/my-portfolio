import React from 'react';
import * as classes from './footer.styles';

export const Footer: React.FC = () => {


  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <img src="/assets/icons/email-icon.svg" alt="email"/>
        <img src="/assets/icons/phone-icon.svg" alt="phone" />
        <img src="/assets/icons/Github-icon.svg" alt="github" />
        <img src="/assets/icons/LinkedIn-icon.svg" alt="linkedin" />

      </nav>
      <p>Copyright ©2023 All rights reserved </p>
    </div>
  );
}
