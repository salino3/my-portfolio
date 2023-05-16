import React from "react";
import { cx } from "@emotion/css";
import * as classes from "./line.styles";

interface Props {
  className?: string;
  img?: string;
  alt?: string;
}

export const ProgressLine: React.FC<Props> = (props) => {
  const { className, img, alt = "icon" } = props;

  return (
      <section className={classes.item}>
        <img src={img} alt={alt} />
        <div className={classes.progressBar}>
          <div className={cx(classes.progressBarInner, className)}></div>
        </div>
      </section>
  );
};
