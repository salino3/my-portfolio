import React from 'react';
import { ProgressLine } from '../progress-line';
import * as classes from './body.styles';
import { BoxSkill } from '../box-skills';


export const BodyComponent: React.FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <main className={classes.progressLines}>
          <h2 className={classes.h2}>My Skills</h2>
          <BoxSkill />
        </main>
      </div>
    </div>
  );
}
