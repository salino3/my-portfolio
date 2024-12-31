import React from "react";
import { useMediaQuery } from "react-responsive";
import { Navbar } from "../navbar";
import resumePDF from "../../../../assets/my-cv-english-latest.pdf";
import * as classes from "./header.styles";

export const Header: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: "725px" });

  return (
    <header className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.mainImg}>
          <img
            loading="lazy"
            src="assets/gallery/main-image.png"
            alt="main-images"
          />
        </div>
        <div className={classes.content}>
          <div className={classes.boxTitle}>
            {isMobile ? (
              <h1 className={classes.title}>
                Hi, I am <br />
                <span>Flavio Forte</span> <br />
                Software Developer
              </h1>
            ) : (
              <h1 className={classes.title}>
                Hi, I am <span>Flavio Forte</span> <br />
                Software Developer
              </h1>
            )}
          </div>
          <div className={classes.description}>
            I am passionate about software programming and dedicated to applying
            my experience to impactful and innovative projects. I am motivated
            to keep learning and growing in the software development field and I
            search new challenges and opportunities.
          </div>
          <a href={resumePDF} download="my-cv-english-latest.pdf">
            <div className={classes.btn}>Download Resume</div>
          </a>
        </div>
      </div>
    </header>
  );
};
