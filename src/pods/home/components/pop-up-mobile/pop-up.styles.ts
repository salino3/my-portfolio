import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const root = css`
  animation: fadeIn;
  animation-duration: 2s;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 ${theme.spacing(4)};
`;

export const content = css`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 30%;
  gap: 22px;
  padding: 0px ${theme.spacing(4)};
  box-shadow: 0px 2px 8px rgba(31, 3, 34, 0.15);
  border-radius: 24px;
  width: 100%;
  max-width: 300px;
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
    top: 20%;
    max-width: 360px;
  }

  @media (min-width: 1024px) {
    top: 15%;
  }
`;

export const btnClose = css`
  padding-top: 20px;
  align-self: flex-end;
  width: 20px;
  cursor: pointer;
`;

export const mobileIcon = css`
  width: 60px;
  height: 60px;
`;

// Standard WCAG for be read by screen reader and to hide visualy a element
export const copiedMessage = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;

export const btnCopy = css`
  width: 100%;
  min-height: 50px;
  background: #d71e38;
  border-radius: 8px;
  position: relative;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  background-color: ${theme.palette.important};
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
