import React from "react";
import * as classes from "./studies.styles";

export const BoxStudies: React.FC = () => {
  return (
    <main className={classes.root}>
      <h3 className={classes.title}>Studies</h3>
      <hr className={classes.hr} />
      <div className={classes.boxArcticles}>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img
              className={classes.imgLemoncode}
              src="assets/icons/icon-lemoncode.svg"
              alt="Lemoncode bootcamp"
              loading="lazy"
            />
            <div className={classes.titleArticle}>
              <h4>
                Bootcamp <br className={classes.lineJump} /> Back-end
              </h4>
              <small> (In progress)</small>
            </div>
          </div>
          <ul className={classes.ul}>
            <li>
              Bootcamp Lemoncode focused on teaching the last and most useful
              technologies in back-end such as Mongo, Mongoose, nodejs, express,
              socket.io, Typescript, SQL Server, .net 5, entity framework,
              signalR.
            </li>
            <li>
              Infrastructure: Docker Cloud, Microsoft, Azure, Amazon, AWS,
              Heroku, Github.
            </li>
            <li>
              <a
                style={{
                  textDecoration: "underline",
                }}
                target="_blank"
                rel="noopener"
                href="https://lemoncode.net/bootcamp-backend#bootcamp-backend/banner"
              >
                Lemoncode bootcamp backend
              </a>
            </li>
          </ul>
        </article>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img
              className={classes.imgLemoncode}
              src="assets/icons/icon-lemoncode.svg"
              alt="Lemoncode bootcamp"
              loading="lazy"
            />
            <div className={classes.titleArticle}>
              <h4>
                Master <br className={classes.lineJump} /> Front-end
              </h4>
              <small> (Jan - Apr 2023)</small>
            </div>
          </div>
          <ul className={classes.ul}>
            <li>
              Master Lemoncode focused on teaching the last and most useful
              technologies in front‑end web development such as React, Angular,
              Vuejs, Svelte, d3js, HTML / CSS, Material Design, CSS in JS, Jest,
              GraphQL Webpack, Parcel, Vite, ES6/ES7, Typescript, Docker, Github
              Actions, Azure, AWS.
            </li>
            <li>
              <a
                style={{
                  textDecoration: "underline",
                }}
                target="_blank"
                rel="noopener"
                href="https://lemoncode.net/master-frontend#inicio-banner"
              >
                Lemoncode master frontend
              </a>
            </li>
          </ul>
        </article>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img
              className={classes.imgPixelpro}
              src="assets/icons/icon-pixel-pro.svg"
              alt="Pixelpro bootcamp"
              loading="lazy"
            />

            <div className={classes.titleArticle}>
              <h4>Pixelpro</h4>
              <small> (Feb - Jul 2022)</small>
            </div>
          </div>
          <ul className={classes.ul}>
            <li>
              Programming initiation bootcamp, which covered programming
              fundamentals (ES6 / TypeScript), as well as the use of libraries
              and frameworks such as React, Angular, Vue, JQuery, HTML and CSS
              standards, and an introduction to nodejs and MySQL was also
              carried out.
            </li>
          </ul>
        </article>
      </div>
    </main>
  );
};
