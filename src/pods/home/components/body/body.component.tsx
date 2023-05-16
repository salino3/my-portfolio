import React from 'react';
import * as classes from './body.styles';
import { ProgressLine } from '../progress-line';

export const BodyComponent: React.FC = () => {
  return (
    <div className={classes.root}>
      <main className={classes.progressLines}>
        <ProgressLine
          className={classes.emotion}
          img="/assets/icons/logo--emotion.svg"
          
        />
        {/*  */}
        <ProgressLine
          className={classes.emotion}
          img="/assets/icons/logo--emotion.svg"
        />
      </main>
    </div>
  );
}
