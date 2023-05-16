import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    gap: 16px;

  }

  hr {
    display: none;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    gap: ${theme.spacing(8)};

    hr {
      display: unset;
      height: 350px;
      border: 1px solid #edf7fa;
      margin: 1rem;
    }
  }
`;

export const emotion = css`
  ${theme.skills.emotion}
`;

export const js = css`
  ${theme.skills.js}
`;

export const ts = css`
  ${theme.skills.ts}
`;

export const gql = css`
  ${theme.skills.gql}
`;

export const sass = css`
  ${theme.skills.sass}
`;

export const node = css`
  ${theme.skills.node}
`;

export const mysql = css`
  ${theme.skills.mysql}
`;

export const mongoose = css`
  ${theme.skills.mongoose}
`;

export const vue = css`
  ${theme.skills.vue}
`;

export const css_icon = css`
  ${theme.skills.css}
`;

export const github = css`
  ${theme.skills.github}
`;

export const vsc = css`
  ${theme.skills.vsc}
`;

export const bootstrap = css`
  ${theme.skills.bootstrap}
`;

export const git = css`
  ${theme.skills.git}
`;

export const html = css`
  ${theme.skills.html}
`;

export const react = css`
  ${theme.skills.react}
`;

export const angular = css`
  ${theme.skills.angular}
`;

export const mui = css`
  ${theme.skills.mui}
`;
