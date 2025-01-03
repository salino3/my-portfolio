import React from "react";
import { cx } from "@emotion/css";
import { PopUpMobile } from "../pop-up-mobile";
import { PopUpEmail } from "../pop-up-email";
import * as classes from "./footer.styles";

export const Footer: React.FC = () => {
  const [showPopupMobile, setShowPopupMobile] = React.useState(false);
  const [showPopupEmail, setShowPopupEmail] = React.useState(false);

  const handleEmailModal = () => {
    setShowPopupEmail((current) => !current);
  };

  const handlePopupEmail = () => {
    setShowPopupEmail(true);
  };

  const handleMobileModal = () => {
    setShowPopupMobile((current) => !current);
  };

  const handlePopupMobile = () => {
    setShowPopupMobile(true);
  };

  return (
    <div className={classes.root}>
      {showPopupMobile && (
        <PopUpMobile
          className={cx({ [classes.popUp]: !showPopupMobile })}
          handleModal={handleMobileModal}
        />
      )}
      {showPopupEmail && (
        <PopUpEmail
          className={cx({ [classes.popUp]: !showPopupEmail })}
          handleModal={handleEmailModal}
        />
      )}
      <nav className={classes.nav}>
        <img
          onClick={handlePopupEmail}
          src="assets/icons/email-icon.svg"
          alt="email"
          loading="lazy"
        />

        <img
          onClick={handlePopupMobile}
          src="assets/icons/phone-icon.svg"
          alt="phone"
          loading="lazy"
        />

        <a
          aria-label="my-Github"
          target="_blank"
          rel="noopener"
          href="https://github.com/salino3"
        >
          <img
            className={classes.icon}
            src="assets/icons/Github-icon.svg"
            alt="Github"
            loading="lazy"
          />
        </a>

        <a
          aria-label="my-LinkedIn"
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/flavio-forte-/"
        >
          <img
            className={classes.icon}
            src="assets/icons/LinkedIn-icon.svg"
            alt="Linkedin"
            loading="lazy"
          />
        </a>
      </nav>
      <p>Thanks for visit my web page </p>
    </div>
  );
};
