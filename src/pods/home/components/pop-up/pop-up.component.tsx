import React from "react";
import { cx } from "@emotion/css";
import * as classes from "./pop-up.styles";

interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const PopUp: React.FC<Props> = (props) => {
  const { className, onClick } = props;

  const [copied, setCopied] = React.useState(false);

  function handleClick() {
 navigator.clipboard.writeText(myNumber);
 setCopied(true);

 setTimeout(() => {
    setCopied(false);
  }, 1000);
};

const myNumber: string = "666873670";

  return (
    <main className={cx(classes.main, className)}>
      <section className={classes.container}>
        <div className={classes.content}>
          <button className={classes.btnClose} onClick={onClick}>
            <img src="/assets/icons/icon-X.svg" alt="close" />
          </button>
          <div>
            <img src="/assets/icons/phone-icon-2.svg" alt="mobile" />
          </div>
          <p className={""}>666 87 36 70</p>
          <button onClick={handleClick} className={classes.btnCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </section>
    </main>
  );
};
