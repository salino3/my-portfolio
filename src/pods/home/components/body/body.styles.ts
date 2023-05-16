import {css} from '@emotion/css';
import { theme } from '../../../../theme';


export const root = css`
  ${theme.background.middle};
  padding: ${theme.spacing(8)} 0px;
  padding-bottom: 5rem;
`;

export const container = css`
  ${theme.background.dark};
  padding: 0px ${theme.spacing(8)};
`;

export const progressLines = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 5rem;

  h2 {
    text-align: center;
  }
`;

export const h2 = css`
  color: ${theme.palette.text_content};
  font-weight: 400;
  font-size: 36px;
  line-height: 53px;
  padding: ${theme.spacing(4)} ${theme.spacing(8)};
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

export const css_icon = css`
  ${theme.skills.css}
`;


export const github = css`
  ${theme.skills.github}
`;

export const bootstrap = css`
  ${theme.skills.bootstrap}
`;

export const html = css`
  ${theme.skills.html}
`;

export const react = css`
  ${theme.skills.react}
`;


