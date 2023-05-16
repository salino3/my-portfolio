import React from 'react';
import { ProgressLine } from '../progress-line';
import * as classes from './box-skills.styles';

export const BoxSkill: React.FC = () => {
  return (
    <div className={classes.container}>
      {" "}
      <div>
        <ProgressLine
          className={classes.react}
          img="../../../../../public/assets/icons/react-original.svg"
          skill="React"
        />
        <ProgressLine
          className={classes.ts}
          img="../../../../../public/assets/icons/typescript.svg"
          skill="Typescript"
        />
        <ProgressLine
          className={classes.js}
          img="../../../../../public/assets/icons/javascript.svg"
          skill="Javascript"
        />
        <ProgressLine
          className={classes.css_icon}
          img="../../../../../public/assets/icons/css3-original-wordmark.svg"
          skill="CSS"
        />{" "}
        <ProgressLine
          className={classes.html}
          img="../../../../../public/assets/icons/html5-original-wordmark.svg"
          skill="HTML"
        />{" "}
        <ProgressLine
          className={classes.sass}
          img="../../../../../public/assets/icons/sass-original.svg"
          skill="Sass"
        />{" "}
        <ProgressLine
          className={classes.vsc}
          img="../../../../../public/assets/icons/vscode-original.svg"
          skill="Visual Studio Code"
        />
        <ProgressLine
          className={classes.emotion}
          img="/assets/icons/logo--emotion.svg"
          skill="Emotion"
        />
        <ProgressLine
          className={classes.node}
          img="../../../../../public/assets/icons/nodejs-plain.svg"
          skill="NodeJS"
        />
      </div>
      <hr />
      <div>
        <ProgressLine
          className={classes.gql}
          img="../../../../../public/assets/icons/graphql-plain.svg"
          skill="GraphQL"
        />{" "}
        <ProgressLine
          className={classes.mysql}
          img="../../../../../public/assets/icons/mysql-original.svg"
          skill="MySQL"
        />
        <ProgressLine
          className={classes.github}
          img="../../../../../public/assets/icons/Github-white.svg"
          skill="GitHub"
        />
        <ProgressLine
          className={classes.bootstrap}
          img="../../../../../public/assets/icons/bootstrap-original.svg"
          skill="Bootstrap"
        />{" "}
        <ProgressLine
          className={classes.git}
          img="../../../../../public/assets/icons/git-original.svg"
          skill="Git"
        />
        <ProgressLine
          className={classes.mongoose}
          img="../../../../../public/assets/icons/mongoose.svg"
          skill="Mongoose"
        />{" "}
        <ProgressLine
          className={classes.vue}
          img="../../../../../public/assets/icons/vuejs-original.svg"
          skill="Vue"
        />
        <ProgressLine
          className={classes.angular}
          img="../../../../../public/assets/icons/angularjs-original.svg"
          skill="Angular"
        />
        <ProgressLine
          className={classes.mui}
          img="../../../../../public/assets/icons/materialui-original.svg"
          skill="Material UI"
        />{" "}
      </div>
    </div>
  );
}
