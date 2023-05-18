import React from 'react';
import * as classes from './navbar.styles'

export const Navbar: React.FC = () => {

  return (
    <div className={classes.container}>
      <ul className={classes.content}>
        <li>
          <a
            aria-label="my-LinkedIn"
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/flavio-forte-/"
          >
            <img
              src="assets/icons/LinkedIn-icon.svg"
              alt="LinkedIn"
            />
          </a>
        </li>
        <li>
          <a
            aria-label="my-Github"
            target="_blank"
            rel="noopener"
            href="https://github.com/salino3"
          >
            <img src="assets/icons/Github-icon.svg" alt="Github" />
          </a>
        </li>
      </ul>
    </div>
  );
}
