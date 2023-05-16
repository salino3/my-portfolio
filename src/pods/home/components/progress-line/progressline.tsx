import React from "react";
import * as classes from "./line.styles";

interface Props {
  className?: string;
  img?: string;
  alt?: string;
  skill?: string;
};

export const ProgressLine: React.FC<Props> = (props) => {
  const { className, img, alt = "icon", skill } = props;

  return (
      <classes.Section> 
        <img src={img} alt={alt} />
        <div className={classes.progressBar}>
          <classes.Line className={className}>{skill}</classes.Line>
        </div>
      </classes.Section>
  );
};
