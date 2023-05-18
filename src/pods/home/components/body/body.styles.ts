import {css} from '@emotion/css';
import { theme } from '../../../../theme';


export const root = css`
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    padding: ${theme.spacing(12)} 0px;
  }
`;

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: rgba(${theme.background.middle});
  padding: ${theme.spacing(12)} 0px;

  @media (min-width: 1024px) {
    padding: 0px;
    height: ${theme.spacing(324)};
  }

  @media (min-width: 1072px) {
    height: ${theme.spacing(310)};
  }

  @media (min-width: 1156px) {
    height: ${theme.spacing(296)};
  }

  @media (min-width: 1311px) {
    height: ${theme.spacing(288)};
  }

  @media (min-width: 1390px) {
    height: ${theme.spacing(277)};
  }
`;


export const content = css`
  background: ${theme.background.dark.background};
  border: ${theme.background.dark.border};
  padding: 16px ${theme.spacing(8)};
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    position: absolute;
    top: ${theme.spacing(140)};
    width: unset;
    padding: ${theme.spacing(12)} ${theme.spacing(8)};
    margin: 0rem ${theme.spacing(40)};
  }
`;

export const progressLines = css`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
`;

export const title = css`
  color: ${theme.palette.text_content};
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
