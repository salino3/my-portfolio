import React from "react";
import { BoxSkills } from "../box-skills";
import { BoxExperiences } from "../box-experiences";
import * as classes from "./body.styles";

export const BodyComponent: React.FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <main className={classes.progressLines}>
          <h2 className={classes.h2}>My Skills</h2>
          <BoxSkills />
          <hr className={classes.centralHr} />
          <BoxExperiences />
        </main>
      </div>
    </div>
  );
};
