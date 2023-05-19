import React from "react";
import { BoxSkills } from "../box-skills";
import { BoxExperiences } from "../box-experiences";
import { BoxStudies } from "../box-studies";
import * as classes from "./body.styles";

export const BodyComponent: React.FC = () => {

  const [height, setHeight] = React.useState<number>(0);


  const widthRef = React.useRef<HTMLDivElement>(null);

   React.useEffect(() => {
     const handleResize = () => {
       if (!widthRef?.current?.clientHeight) {
         return;
       };
       setHeight(widthRef.current.clientHeight);
     };

     window.addEventListener("resize", handleResize);
     handleResize(); 

     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);
  // React.useEffect(() => {
  //   if (!widthRef?.current?.clientHeight) {
  //     return;
  //   }else{
      
  //     setHeight(widthRef?.current?.clientHeight);
  //     }
      
  //   }, [widthRef?.current?.clientHeight]);

   React.useEffect(() => {
     console.log(height);
   }, [height]);

  return (
    <div
      style={{
        height: `calc(${height}px - 150px)`,
      }}
      className={classes.root}
    >
      <div className={classes.container}>
        <div ref={widthRef} className={classes.content}>
          <main className={classes.progressLines}>
            <h2 className={classes.title}>My Skills</h2>
            <BoxSkills />
            <hr className={classes.centralHr} />
            <BoxExperiences />
            <hr className={classes.centralHr} />
            <BoxStudies />
          </main>
        </div>
      </div>
    </div>
  );
};
