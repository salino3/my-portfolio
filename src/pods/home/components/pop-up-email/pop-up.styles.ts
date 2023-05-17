import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const main = css`
  animation: fadeIn;
  animation-duration: 2s;
  position: fixed;
  z-index: 3;
  top: 0;

  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 700px) {
    height: 120%;
  }

  @media (min-width: 1024px) {
    height: 62%;
  }
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
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0px ${theme.spacing(4)};

  box-shadow: 0px 2px 8px rgba(31, 3, 34, 0.15);
  border-radius: 24px;
  width: 100%;
  top: 40%;
  height: 300px;
  background-color: ${theme.background.light};

  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: #25314d;
  }

  @media (min-width: 725px) {
    top: 32%;
  }
`;

export const btnClose = css`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
 
  img {
    width: 100%;
  }
`;

export const emailIcon = css`

 width: 60px;
 height: 60px;

  img {
  width: 100%;
  width: 100%;
  }
`;

export const a = css`
 
 width: 100%;
`

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
`;