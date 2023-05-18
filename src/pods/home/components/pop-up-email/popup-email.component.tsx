import React from "react";
import { cx } from "@emotion/css";
import * as classes from "./pop-up.styles";

interface Props {
  className?: string;
  handleModal?: () => void;
};

export const PopUpEmail: React.FC<Props> = (props) => {
  const { className, handleModal } = props;

  const [copied, setCopied] = React.useState(false);

  function handleClick() {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const myEmail: string = "programacionflavio@gmail.com";

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.content}>
        <img
          className={classes.btnClose}
          onClick={handleModal}
          src="/assets/icons/icon-X.svg"
          alt="close"
        />
        <img
          className={classes.emailIcon}
          src="/assets/icons/email-icon.svg"
          alt="mobile"
        />
        <p>programacionflavio@gmail.com</p>
        <button onClick={handleClick} className={classes.btnCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <a href={`mailto:${myEmail}`} className={classes.a}>
          <button className={classes.btnSend}>Send</button>
        </a>
      </div>
    </div>
  );
};
