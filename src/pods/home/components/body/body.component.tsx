import React from "react";
import { BoxSkills } from "../box-skills";
import { BoxExperiences } from "../box-experiences";
import { BoxStudies } from "../box-studies";
import * as classes from "./body.styles";

export const BodyComponent: React.FC = () => {

  const initialHeight = 300;
  
  const [elementHeight, setElementHeight] = React.useState<number>(initialHeight);
  const elementRef = React.useRef<HTMLDivElement>(null);

   React.useEffect(() => {
     if (elementRef.current) {     
       setElementHeight(elementRef.current.clientHeight);
     };
  
   }, [elementRef.current?.clientHeight]);

    React.useLayoutEffect(() => {
      // const handleResize = () => {
        // };
        
        if (elementRef.current) {
          setElementHeight(elementRef.current.clientHeight);
        }
      // handleResize(); // Actualizar el height inicial

      // window.addEventListener("resize", handleResize);

      // return () => {
      //   window.removeEventListener("resize", handleResize);
      // };
    }, [elementRef.current?.clientHeight]);


   console.log("elementHeight", elementHeight); 
 
  return (
    <div
      style={{
        minHeight: `${elementHeight}px `,
      }}
      className={classes.root}
    >
      <div
        className={classes.container}
      >
        <div ref={elementRef} className={classes.content}>
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
