import React from "react";
import { theme } from "../../../../theme";
import * as classes from "./footer.styles";

export const Footer: React.FC = () => {

  

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href={`mailto:${theme.rutaMyEmail}`} className={classes.a}>
              <img src="/assets/icons/email-icon.svg" alt="email" />
            </a>
          </li>
          <li className={classes.a}>
            <img src="/assets/icons/phone-icon.svg" alt="phone" />
          </li>
          <li>
            <a
              className={classes.a}
              aria-label="my-Github"
              target="_blank"
              rel="noopener"
              href="https://github.com/salino3"
            >
              <img src="/assets/icons/Github-icon.svg" alt="github" />
            </a>
          </li>
          <li>
            <a
              aria-label="my-LinkedIn"
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/flavio-forte-/"
              className={classes.a}
            >
              <img src="/assets/icons/LinkedIn-icon.svg" alt="linkedin" />
            </a>
          </li>
        </ul>
      </nav>
      <p>Copyright ©2023 All rights reserved </p>
    </div>
  );
};
