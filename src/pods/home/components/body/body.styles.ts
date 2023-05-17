import {css} from '@emotion/css';
import { theme } from '../../../../theme';


export const root = css`
  display: relative;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 3rem 0rem;
  }
`;

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${theme.background.middle}
  padding: ${theme.spacing(12)} 0px;

  @media (min-width: 1024px) {
    padding: 0px;
    height: 81rem;
  }

  @media (min-width: 1072px) {
    height: 77.5rem;
  }

  @media (min-width: 1156px) {
    height: 75rem;
  }
`;


export const content = css`
  ${theme.background.dark};
  padding: 16px ${theme.spacing(8)};
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    position: absolute;
    top: 35rem;
    width: unset;
    padding: 3rem ${theme.spacing(8)};
    margin: 0rem 10rem;
  }
`;

export const progressLines = css`
  display: flex;
  flex-direction: column;

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

export const centralHr = css`
  border: 1px solid #edf7fa;
  margin: ${theme.spacing(12)} auto;
  width: 100%;
`; 
