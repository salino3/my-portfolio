import {css} from '@emotion/css';
import { theme } from '../../../../theme';


export const root = css`
display: relative;
  ${theme.background.middle};
  padding: ${theme.spacing(8)} 0px;

  @media (min-width: 1024px) {
    padding: 0px ${theme.spacing(36)};
  }
`;

export const container = css`
  ${theme.background.dark};
  padding: 0px ${theme.spacing(8)};

  @media (min-width: 1024px) {
    margin: ${theme.spacing(7)} 0px;
    /* position: absolute;
    top: -50px; 
    bottom: -50px;
    left: 0;
    right: 0; */
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
