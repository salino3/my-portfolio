import React from "react";
import { cx } from "@emotion/css";
import * as classes from "./pop-up.styles";

interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const PopUpEmail: React.FC<Props> = (props) => {
  const { className, onClick } = props;

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
    <main className={cx(classes.main, className)}>
      <section className={classes.container}>
        <div className={classes.content}>
          <button className={classes.btnClose} onClick={onClick}>
            <img src="/assets/icons/icon-X.svg" alt="close" />
          </button>
          <div className={classes.emailIcon}>
            <img src="/assets/icons/email-icon.svg" alt="mobile" />
          </div>
          <p>programacionflavio@gmail.com</p>
          <button onClick={handleClick} className={classes.btnCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <a href={`mailto:${myEmail}`} className={classes.a} >
            <button  className={classes.btnSend}>
              Send
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};
