import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const root = css`
  display: flex;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 1024px) {
    padding: ${theme.spacing(14)} 0px;
  }
`;

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: rgba(${theme.background.middle});
  padding: ${theme.spacing(12)} 0px;

  @media (min-width: 1024px) {
    padding: 0px;
  }
`;

export const content = css`
  background: ${theme.background.dark.background};
  border: ${theme.background.dark.border};
  padding: ${theme.spacing(4)} ${theme.spacing(8)};
  width: 100%;
  min-width: 375px;
  max-width: 1024px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    height: calc(100% + ${theme.spacing(32)});
  }
`;

export const progressLines = css`
  display: flex;
  flex-direction: column;
`;

export const title = css`
  color: ${theme.palette.text_content};
  text-align: center;

  font-weight: 400;
  font-size: 36px;
  line-height: 53px;
  padding: ${theme.spacing(4)} ${theme.spacing(8)};
`;

export const centralHr = css`
  border: 1px solid #edf7fa;
  margin: ${theme.spacing(12)} auto;
  width: 100%;
`;
