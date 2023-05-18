import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const main = css`
  animation: fadeIn;
  animation-duration: 2s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const container = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(2.5)};

  @media (min-width: 725px) {
    width: 360px;
  }
`;

export const content = css`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 26px;
  padding: 0px ${theme.spacing(4)};

  box-shadow: 0px 2px 8px rgba(31, 3, 34, 0.15);
  border-radius: 24px;
  width: 100%;
  max-width: 346px;
  top: 35%;
  height: 248px;
  background-color: ${theme.background.light};
  padding-bottom: 15px;

  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: #25314d;
  }

  @media (min-width: 725px) {
    top: 48%;
    max-width: 360px;
  }

  @media (min-width: 1024px) {
    top: 15%;
  }
`;

export const btnClose = css`
  position: relative;
  top: 12px;
  left: 170px;
  width: 20px;
  cursor: pointer;
`;


export const mobileIcon = css`
  width: 60px;
  height: 60px;

`;

export const btnCopy = css`
  width: 100%;
  height: 50px;
  background: #d71e38;
  border-radius: 8px;

  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  background-color: ${theme.palette.danger};
  color: ${theme.palette.text_content};
  cursor: pointer;
`;