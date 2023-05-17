import React from "react";
import { BoxSkills } from "../box-skills";
import { BoxExperiences } from "../box-experiences";
import * as classes from "./body.styles";

export const BodyComponent: React.FC = () => {

  
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <main className={classes.progressLines}>
            <h2 className={classes.title}>My Skills</h2>
            <BoxSkills />
            <hr className={classes.centralHr} />
            <BoxExperiences />
          </main>
        </div>
      </div>
    </div>
  );
};
