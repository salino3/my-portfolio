import React from "react";
import * as classes from "./box-skills.styles";

export const BoxSkills: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.ReactBox}>
        <div className={classes.box1}>
          <img
            loading="lazy"
            src="assets/icons/react-original.svg"
            alt="React icon"
          />
        </div>
        <div>
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
            implementing best practices, and build maintainable code. If I need
            to handle the entire front-end process with precision, React is the
            tool I use the most for front-end development.
          </p>
        </div>
      </div>

      <div className={classes.BackendBox}>
        <div className={classes.box2}>
          <img
            loading="lazy"
            src="assets/icons/nodejs-plain.svg"
            alt="Node.js icon"
          />
        </div>
        <div className={classes.box3}>
          <img
            loading="lazy"
            src="assets/icons/mysql-original.svg"
            alt="MySQL icon"
          />
        </div>
        <div>
          <p>
            I have practical experience in back-end development using Node.js,
            Express and MySQL. While my experience is more extensive in
            front-end development, I’ve successfully worked on projects
            involving Node.js, with Typescript as well, including creating
            repositories from zero and building APIs for user authentication
            (register and login) using tools like JSON Web Tokens (JWT) and
            cookies, GraphQL, etc. MySQL is the database I am most familiar, and
            I have designed and managed multiple relational database schemas
            with relationships between tables. I’ve implemented CRUD operations,
            optimized queries, and ensured data integrity in my projects. I’ve
            also worked with MongoDB but MySQL remains my primary database tool
            due to my experience in writing SQL queries and handling database
            design. I am comfortable setting up back-end architectures to
            integrate efficiently with front-end systems.
          </p>
        </div>
      </div>
    </div>
  );
};
