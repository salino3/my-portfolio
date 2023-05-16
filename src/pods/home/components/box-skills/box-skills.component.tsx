import React from "react";
import { ProgressLine } from "../progress-line";
import * as classes from "./box-skills.styles";

export const BoxSkills: React.FC = () => {
  return (
    <div className={classes.container}>
      <div>
        <ProgressLine
          className={classes.react}
          img="/assets/icons/react-original.svg"
          skill="React"
        />
        <ProgressLine
          className={classes.ts}
          img="/assets/icons/typescript.svg"
          skill="Typescript"
        />
        <ProgressLine
          className={classes.js}
          img="/assets/icons/javascript.svg"
          skill="Javascript"
        />
        <ProgressLine
          className={classes.css_icon}
          img="/assets/icons/css3-original-wordmark.svg"
          skill="CSS"
        />
        <ProgressLine
          className={classes.html}
          img="/assets/icons/html5-original-wordmark.svg"
          skill="HTML"
        />
        <ProgressLine
          className={classes.sass}
          img="/assets/icons/sass-original.svg"
          skill="Sass"
        />
        <ProgressLine
          className={classes.vsc}
          img="/assets/icons/vscode-original.svg"
          skill="Visual Studio Code"
        />
        <ProgressLine
          className={classes.emotion}
          img="/assets/icons/logo--emotion.svg"
          skill="Emotion"
        />
        <ProgressLine
          className={classes.gql}
          img="/assets/icons/graphql-plain.svg"
          skill="GraphQL"
        />
      </div>
      <hr />
      <div>
        <ProgressLine
          className={classes.node}
          img="/assets/icons/nodejs-plain.svg"
          skill="NodeJS"
        />
        <ProgressLine
          className={classes.mysql}
          img="/assets/icons/mysql-original.svg"
          skill="MySQL"
        />
        <ProgressLine
          className={classes.github}
          img="/assets/icons/Github-white.svg"
          skill="GitHub"
        />
        <ProgressLine
          className={classes.bootstrap}
          img="/assets/icons/bootstrap-original.svg"
          skill="Bootstrap"
        />
        <ProgressLine
          className={classes.git}
          img="/assets/icons/git-original.svg"
          skill="Git"
        />
        <ProgressLine
          className={classes.mongoose}
          img="/assets/icons/mongoose.svg"
          skill="Mongoose"
        />
        <ProgressLine
          className={classes.vue}
          img="/assets/icons/vuejs-original.svg"
          skill="Vue"
        />
        <ProgressLine
          className={classes.angular}
          img="/assets/icons/angularjs-original.svg"
          skill="Angular"
        />
        <ProgressLine
          className={classes.mui}
          img="/assets/icons/materialui-original.svg"
          skill="Material UI"
        />
      </div>
    </div>
  );
};
