import React from "react";
import { cx } from "@emotion/css";
import { PopUpMobile } from "../pop-up-mobile";
import { PopUpEmail } from "../pop-up-email";
import * as classes from "./footer.styles";

export const Footer: React.FC = () => {
  const [showPopupMobile, setShowPopupMobile] = React.useState(false);
  const [showPopupEmail, setShowPopupEmail] = React.useState(false);

  const onClick = () => {
    setShowPopupMobile(false);
    setShowPopupEmail(false);
  };

  const handlePopupMobile = () => {
    setShowPopupMobile(true);
  };

  const handlePopupEmail= () => {
    setShowPopupEmail(true);
  };

  return (
    <div className={classes.root}>
      <PopUpMobile
        className={cx({ [classes.popUp]: !showPopupMobile })}
        onClick={onClick}
      />
      <PopUpEmail
        className={cx({ [classes.popUp]: !showPopupEmail })}
        onClick={onClick}
      />
      <nav className={classes.nav}>
        <ul>
          <li>
            <a className={classes.a}>
              <img
                onClick={handlePopupEmail}
                src="/assets/icons/email-icon.svg"
                alt="email"
              />
            </a>
          </li>
          <li className={classes.a}>
            <img
              onClick={handlePopupMobile}
              src="/assets/icons/phone-icon.svg"
              alt="phone"
            />
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
