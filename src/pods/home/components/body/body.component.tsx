import React from 'react';
import * as classes from './body.styles';
import { ProgressLine } from '../progress-line';


export const BodyComponent: React.FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <main className={classes.progressLines}>
          <ProgressLine
            className={classes.emotion}
            img="/assets/icons/logo--emotion.svg"
            skill="Emotion"
          />
          <ProgressLine
            className={classes.js}
            img="../../../../../public/assets/icons/javascript.svg"
            skill="Javascript"
          />{" "}
          <ProgressLine
            className={classes.ts}
            img="../../../../../public/assets/icons/typescript.svg"
            skill="Typescript"
          />{" "}
          <ProgressLine
            className={classes.sass}
            img="../../../../../public/assets/icons/sass-original.svg"
            skill="Sass"
          />{" "}
          <ProgressLine
            className={classes.node}
            img="../../../../../public/assets/icons/nodejs-plain.svg"
            skill="NodeJS"
          />
          <ProgressLine
            className={classes.mysql}
            img="../../../../../public/assets/icons/mysql-original.svg"
            skill="MySQL"
          />
          <ProgressLine
            className={classes.mongoose}
            img="../../../../../public/assets/icons/mongoose.svg"
            skill="Mongoose"
          />
          <ProgressLine
            className={classes.css_icon}
            img="../../../../../public/assets/icons/css3-original-wordmark.svg"
            skill="CSS"
          />
          <ProgressLine
            className={classes.github}
            img="../../../../../public/assets/icons/github-original.svg"
            skill="GitHub"
          />
          <ProgressLine
            className={classes.bootstrap}
            img="../../../../../public/assets/icons/bootstrap-original.svg"
            skill="Bootstrap"
          />
          <ProgressLine
            className={classes.html}
            img="../../../../../public/assets/icons/html5-original-wordmark.svg"
            skill="HTML"
          />
        </main>
      </div>
    </div>
  );
}
