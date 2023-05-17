import React from 'react';
import * as classes from './experience.styles';

export const BoxExperiences: React.FC = () => {


  return (
    <main className={classes.root}>
      <h3 className={classes.title}>Experiences</h3>
      <hr className={classes.hr} />
      <div className={classes.boxArcticles}>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img src="/assets/icons/icon_manfred.svg" alt="manfred" />
            <div className={classes.titleArticle}>
              <h4>Manfred Export</h4>
              <small> (Open source proyect - 2023)</small>
            </div>
          </div>
          <ul className={classes.ul}>
            <li>
              Web tool to export a JSON MAC profile (standard getManfred format)
              to Ms Word.
            </li>
            <li>
              My role here is to build the site layout and styles using @emotion
              (CSS in JS) and following a Figma based design.
            </li>
            <li>
              <a href="https://github.com/Lemoncode/manfred-export-app">
                https://github.com/Lemoncode/manfred-export-app
              </a>
            </li>
          </ul>
        </article>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img src="/assets/icons/icon_omix.svg" alt="omix" />
            <div className={classes.titleArticle}>
              <h4>e-commerce app</h4>
              <small> (Open source proyect - 2023)</small>
            </div>
          </div>
          <ul className={classes.ul}>
            <li>
              Simple Ecommerce simulation, SPA React application: list of items,
              details, and shopping cart implementation.
            </li>
            <li>
              <a href="https://github.com/salino3/react-e-commerce-vite">
                https://github.com/salino3/react-e-commerce-vite
              </a>
            </li>
            <li>
              <a href="https://e-commerce-lemoncode.vercel.app/">
                https://e-commerce-lemoncode.vercel.app/
              </a>
            </li>
          </ul>
        </article>
      </div>
    </main>
  );
}
