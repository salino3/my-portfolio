import React from "react";
import { useMediaQuery } from "react-responsive";
import { Navbar } from "../navbar";
import resumePDF from "../../../../assets/CV_Flavio.pdf";
import * as classes from "./header.styles";

export const Header: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: "725px" });

  return (
    <header className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.mainImg}>
          <img src="/assets/gallery/main-image.png" alt="main-images" />
        </div>
        <div className={classes.content}>
          <div className={classes.boxTitle}>
            {isMobile ? (
              <h1 className={classes.title}>
                Hi, I am <br />
                <span>Flavio FORTE</span> <br />
                FrontEnd Developer
              </h1>
            ) : (
              <h1 className={classes.title}>
                Hi, I am <span>Flavio FORTE</span> <br />
                FrontEnd Developer
              </h1>
            )}
          </div>
          <div className={classes.description}>
            I have passion for software programming and I am excited to apply my
            skills and knowledge to real-world projects , I really want to keep
            learning and growing in the software development field and I search
            new challenges and opportunities.
          </div>
          <a href={resumePDF} download="CV_Flavio.pdf">
            <div className={classes.btn}>Download Resume</div>
          </a>
        </div>
      </div>
    </header>
  );
};
