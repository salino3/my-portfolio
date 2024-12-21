import React from "react";
import { ProgressLine } from "../progress-line";
import * as classes from "./box-skills.styles";
import "./styles.css";

export const BoxSkills: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.ReactBox}>
        <div className={classes.box1}>
          <img src="assets/icons/react-original.svg" alt="React icon" />
        </div>
        <div className="text">
          <p>
            I have over two years of experience working as a web developer and
            have been studying web technologies for four years. Among the
            front-end technologies I’ve worked with, React stands out as my
            specialty. I have a deep understanding of creating dynamic and
            responsive applications using React, with Typescript as well, from
            setting up projects to managing complex states with tools like
            Context API. My experience also includes working with vanilla
            JavaScript. I can make custom components, and integrating APIs
            efficiently. I am highly skilled in HTML, SCSS, and designing web
            interfaces from zero with multiple pages using React Router DOM,
            GraphQL, etc. My proficiency extends to optimizing performance,
            implementing best practices, and build maintainable code. If you
            need someone who can handle the entire front-end process with
            precision, React is the tool I use the most for front-end
            development.
          </p>
        </div>
      </div>
    </div>
  );
};
