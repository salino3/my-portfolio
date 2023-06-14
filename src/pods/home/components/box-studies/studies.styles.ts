import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const root = css`
  margin-bottom: ${theme.spacing(25)};
`;

export const title = css`
  font-weight: 400;
  font-size: 28px;
  line-height: 41px;
  color: ${theme.palette.text_content};
`;

export const hr = css`
  border: 1px solid #edf7fa;
  margin: ${theme.spacing(4)} 0px ${theme.spacing(8)};
  width: ${theme.spacing(17.5)};
`;

export const boxArcticles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.spacing(8)};
`;

export const article = css`
  color: ${theme.palette.text_content};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: ${theme.spacing(10)};

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const contentArcticle = css`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing(4)};
  align-self: flex-start;
  justify-content: space-between;
  
`;

export const imgLemoncode = css`
  background-color: ${theme.background.light};
  max-width: 60px;
  border: solid 2px white;
  width: 100%;
`;


export const imgPixelpro = css`
  max-width: 64px;
  width: 100%;
`;

export const titleArticle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 400;

  h4 {
    font-size: 30px;
    line-height: 44px;
  }
  small {
    font-size: 8px;
    line-height: 12px;
  }

  white-space: nowrap;
`;

export const ul = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: disc;
  text-align: start;
  padding: 0px 32px;

  a {
    text-decoration: none;
    color: ${theme.palette.text_content};
  }

  @media (min-width: 1024px) {
    max-width: 40%;
  }
`;
