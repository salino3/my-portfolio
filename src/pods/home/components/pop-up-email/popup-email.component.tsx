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
  const copyButtonRef = React.useRef<HTMLButtonElement>(null);

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

  React.useEffect(() => {
    // 'requestAnimationFrame' schedules a function to run just after DOM and before the next repaint or synchronous javascript.
    // It ensures that any DOM updates are completed, making it useful for visual changes or focus logic.
    // This provides better performance and avoids layout thrashing compared to setTimeout.
    // similar to 'useLayoutEffect
    const id = requestAnimationFrame(() => {
      copyButtonRef.current?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={cx(classes.root, className)}>
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
          className={classes.emailIcon}
          src="assets/icons/email-icon.svg"
          alt="Icon email"
          loading="lazy"
        />
        <p
          style={{
            position: "relative",
          }}
        >
          {theme?.routeMyEmail}
          <span aria-live="polite" className={classes.copiedMessage}>
            {copied ? "Email copied to clipboard" : ""}
          </span>
        </p>
        <button
          ref={copyButtonRef}
          aria-label="Copy my email"
          onClick={handleClick}
          className={classes.btnCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <a
          aria-label="Send me a email"
          href={`mailto:${theme?.routeMyEmail}`}
          className={classes.a}
        >
          <button className={classes.btnSend}>Send</button>
        </a>
      </div>
    </div>
  );
};
