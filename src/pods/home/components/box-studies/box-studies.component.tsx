import React from 'react';
import * as classes from './studies.styles';

export const BoxStudies: React.FC = () => {
  return (
    <main className={classes.root}>
      <h3 className={classes.title}>Studies</h3>
      <hr className={classes.hr} />
      <div className={classes.boxArcticles}>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img src="assets/icons/icon_manfred.svg" alt="manfred" />
            <div className={classes.titleArticle}>
              <h4>Lemoncode</h4>
              <small> (Jan - Apr 2023)</small>
            </div>
          </div>
          <ul className={classes.ul}>
            <li>
              Master focused on teaching the last and most useful technologies
              in front‑end web development such as React, Angular, Vuejs,
              Svelte, d3js, HTML / CSS, Material Design, CSS in JS, Jest,
              GraphQL Webpack, Parcel, Vite, ES6/ES7, Typescript, Docker, Github
              Actions, Azure, AWS.
            </li>
            <li>
              <a href="https://lemoncode.net/master-frontend#inicio-banner">
                https://lemoncode.net/master-frontend#inicio-banner
              </a>
            </li>
          </ul>
        </article>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img src="assets/icons/icon_omix.svg" alt="omix" />
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
              standards, and an introduction to nodejs and MySql was also
              carried out
            </li>
          </ul>
        </article>
      </div>
    </main>
  );
}
