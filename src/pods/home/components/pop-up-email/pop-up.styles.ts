import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const root = css`
  animation: fadeIn;
  animation-duration: 2s;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
  /* padding-bottom: 50px; */
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
  top: 5%;

  gap: 22px;
  padding: 0px ${theme.spacing(4)};
  box-shadow: 0px 2px 8px rgba(31, 3, 34, 0.15);
  border-radius: 24px;
  width: 100%;
  max-width: 360px;
  height: 285px;
  padding-bottom: 15px;
  background-color: ${theme.background.light};

  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: #25314d;
  }

  @media (min-width: 725px) {
    top: 12%;
  }
`;

export const btnClose = css`
  
  position: relative;
  top: 20px;
  left: 170px; 
  width: 20px;
  cursor: pointer;
`;

export const emailIcon = css`
  width: 60px;
  height: 60px;

  img {
    width: 100%;
  }
`;

export const a = css`
  cursor: pointer;
  width: 100%;
`;

export const btnCopy = css`
  width: 100%;
  min-height: 50px;
  background: #d71e38;
  border-radius: 8px;

  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  background-color: ${theme.palette.danger};
  color: ${theme.palette.text_content};
  cursor: pointer;
`;

export const btnSend = css`
  width: 100%;
  height: 50px;
  border-radius: 8px;

  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  background-color: ${theme.background.dark.background};
  color: ${theme.palette.text_content};
  cursor: pointer;
`;
