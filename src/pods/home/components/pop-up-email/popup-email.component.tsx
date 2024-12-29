import React from "react";
import { cx } from "@emotion/css";
import { theme } from "../../../../theme";
import * as classes from "./pop-up.styles";

interface Props {
  className?: string;
  handleModal?: () => void;
}

export const PopUpEmail: React.FC<Props> = (props) => {
  const { className, handleModal } = props;

  const contentRef = React.useRef<HTMLDivElement>(null);

  const [copied, setCopied] = React.useState(false);

  function handleClick() {
    navigator.clipboard.writeText(theme?.routeMyEmail);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        handleModal?.();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleModal]);

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.content} ref={contentRef}>
        <img
          className={classes.btnClose}
          onClick={handleModal}
          src="assets/icons/icon-X.svg"
          alt="close"
          loading="lazy"
        />
        <img
          className={classes.emailIcon}
          src="assets/icons/email-icon.svg"
          alt="mobile"
          loading="lazy"
        />
        <p>{theme?.routeMyEmail}</p>
        <button onClick={handleClick} className={classes.btnCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <a href={`mailto:${theme?.routeMyEmail}`} className={classes.a}>
          <button className={classes.btnSend}>Send</button>
        </a>
      </div>
    </div>
  );
};
