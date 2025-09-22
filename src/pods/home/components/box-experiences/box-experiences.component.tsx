import React from "react";
import * as classes from "./experience.styles";

export const BoxExperiences: React.FC = () => {
  return (
    <main className={classes.root}>
      <h3 className={classes.title}>Experience</h3>
      <hr className={classes.hr} />
      <div className={classes.boxArcticles}>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img src="assets/gallery/saurus.png" alt="Saurus" loading="lazy" />
            <div className={classes.titleArticle}>
              <h4>Saurus</h4>
              <small> (Web Development - since Febbruary 2024 )</small>
            </div>
          </div>
          <ul className={classes.ul}>
            <li>Innovative technology with financial services.</li>
            <li>My Role is web development Front-end.</li>
            <li>
              <a
                style={{
                  textDecoration: "underline",
                }}
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/company/sauruscom"
              >
                Saurus.com
              </a>
            </li>
          </ul>
        </article>
        {/*  */}
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img
              src="assets/gallery/logo_d_databay.webp"
              alt="Databay Solution"
              loading="lazy"
            />
            <div className={classes.titleArticle}>
              <h4>Databay Solution</h4>
              <small>
                (Web Development - since July 2023 untill Jannuary 2024)
              </small>
            </div>
          </div>
          <ul className={classes.ul}>
            <li>Web development consulting.</li>
            <li>
              My Role was web development, principally Front-end and Back-end
              too.
            </li>
            <li>
              <a
                style={{
                  textDecoration: "underline",
                }}
                target="_blank"
                rel="noopener"
                href="https://databay.solutions/"
                aria-label="Icon company Databay Solutions"
              >
                Databay Solutions
              </a>
            </li>
          </ul>
        </article>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img
              src="assets/icons/icon_manfred.svg"
              aria-label="Icon company Manfred"
              loading="lazy"
            />
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
              <a
                style={{
                  textDecoration: "underline",
                }}
                target="_blank"
                rel="noopener"
                href="https://github.com/Lemoncode/manfred-export-app"
              >
                https://github.com/Lemoncode/manfred-export-app
              </a>
            </li>
          </ul>
        </article>
        <article className={classes.article}>
          <div className={classes.contentArcticle}>
            <img
              src="assets/icons/icon_omix.svg"
              aria-label="Icon web Omix"
              loading="lazy"
            />
            <div className={classes.titleArticle}>
              <h4>E-commerce app</h4>
              <small> (Open source proyect - 2023)</small>
            </div>
          </div>
          <ul className={classes.ul}>
            <li>
              Simple Ecommerce simulation, SPA React application: list of items,
              details, and shopping cart implementation.
            </li>
            <li>
              <a
                style={{
                  textDecoration: "underline",
                }}
                target="_blank"
                rel="noopener"
                href="https://github.com/salino3/e-commerce-lemoncode"
              >
                https://github.com/salino3/e-commerce-lemoncode
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "underline",
                }}
                target="_blank"
                rel="noopener"
                href="https://e-commerce-lemoncode.vercel.app"
              >
                https://e-commerce-lemoncode.vercel.app
              </a>
            </li>
          </ul>
        </article>
      </div>
    </main>
  );
};
