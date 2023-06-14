import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const root = css`
  display: flex;
  flex-direction: column;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    padding: ${theme.spacing(2)} ${theme.spacing(16)} ${theme.spacing(16)};
    gap: ${theme.spacing(16)};
  }
`;

export const mainImg = css`
  img {
    max-width: 170px;
    width: 100%;

    @media (min-width: 1024px) {
      min-width: 378px;
    }
  }
`;

export const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    justify-content: unset;
    align-items: unset;
  }
`;

export const boxTitle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: start;
    justify-content: flex-start;
  }
`;

export const title = css`
  color: ${theme.palette.text_header};
  font-weight: 700;
  font-size: 25px;
  line-height: 37px;

  span {
    font-size: 34px;
    line-height: 50px;
    color: ${theme.palette.important};
  }
`;

export const description = css`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #000000;

  padding: ${theme.spacing(8)} ${theme.spacing(8)};

  @media (min-width: 500px) {
    padding: ${theme.spacing(8)} 20%;
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    text-align: start;
    justify-content: flex-start;
    padding-left: 0px;
    width: ${theme.spacing(105)};
  }
`;

export const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(2)} ${theme.spacing(4.25)};
  background-color: ${theme.palette.important};
  margin: 0px ${theme.spacing(8)} ${theme.spacing(8)};

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: ${theme.palette.text_content};

  @media (min-width: 1024px) {
    margin-left: 0px;
  }
`;
