import React from "react";
import { cx } from "@emotion/css";
import * as classes from "./pop-up.styles";

interface Props {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> 
};

export const PopUp: React.FC<Props> = (props) => {
    const {className, onClick} = props;

  return (
    <main className={cx(classes.main, className)}>
      <section className={classes.container}>
        <div className={classes.content}>
        <button onClick={onClick}>X</button>
            pop-up.component</div>
      </section>
    </main>
  );
};
