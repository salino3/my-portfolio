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
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [copied, setCopied] = React.useState(false);

  function handleClick() {
    navigator.clipboard.writeText(theme?.mobileNumber);
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
    <div className={cx(classes.main, className)}>
      <div className={classes.container}>
        <div className={classes.content} ref={contentRef}>
          <img
            tabIndex={0}
            role="button"
            className={classes.btnClose}
            onClick={handleModal}
            onKeyDown={(e: React.KeyboardEvent<HTMLImageElement>) =>
              e.key === "Enter" && handleModal?.()
            }
            src="assets/icons/icon-X.svg"
            alt="Close icon"
            aria-label="Close pop up"
            loading="lazy"
          />
          <img
            className={classes.mobileIcon}
            src="assets/icons/phone-icon-2.svg"
            alt="Icon mobile"
            loading="lazy"
          />
          <p
            style={{
              position: "relative",
            }}
          >
            {" "}
            {theme?.mobileNumber}
            <span aria-live="polite" className={classes.copiedMessage}>
              {copied ? "Telefon number copied to clipboard" : ""}
            </span>
          </p>
          <button
            aria-label="Copy my telefon number"
            onClick={handleClick}
            className={classes.btnCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <a
            aria-label="Call me"
            href={`tel:${theme?.mobileNumber}`}
            className={classes.a}
          >
            <button className={classes.btnSend}>Call</button>
          </a>
        </div>
      </div>
    </div>
  );
};
