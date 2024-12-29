import React from "react";
import { cx } from "@emotion/css";
import { theme } from "../../../../theme";
import * as classes from "./pop-up.styles";

interface Props {
  className?: string;
  handleModal?: () => void;
}

export const PopUpMobile: React.FC<Props> = (props) => {
  const { className, handleModal } = props;

  const [copied, setCopied] = React.useState(false);

  function handleClick() {
    navigator.clipboard.writeText(theme?.mobileNumber);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className={cx(classes.main, className)}>
      <div className={classes.container}>
        <div className={classes.content}>
          <img
            className={classes.btnClose}
            onClick={handleModal}
            src="assets/icons/icon-X.svg"
            alt="close"
          />
          <img
            className={classes.mobileIcon}
            src="assets/icons/phone-icon-2.svg"
            alt="mobile"
          />
          <p>666 87 36 70</p>
          <button onClick={handleClick} className={classes.btnCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <a href={`tel:${theme?.mobileNumber}`} className={classes.a}>
            <button className={classes.btnSend}>Call</button>
          </a>
        </div>
      </div>
    </div>
  );
};
