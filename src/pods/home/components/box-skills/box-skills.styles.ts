import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReactBox = css`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const box1 = css`
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  top: 0;
  float: left;
  shape-outside: circle();
  margin-right: 18px;

  & > img {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    image-rendering: pixelated;
    object-fit: cover;
  }
`;

export const emotion = css`
  ${theme.skills.emotion}
`;

export const docker = css`
  ${theme.skills.docker}
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
