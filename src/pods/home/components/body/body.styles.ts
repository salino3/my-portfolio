import {css} from '@emotion/css';
import { theme } from '../../../../theme';


export const root = css`
  ${theme.background.middle};
  padding: ${theme.spacing(8)} 0px;
  padding-bottom: 5rem;
`;

export const container = css`
  ${theme.background.dark};
  padding: 0px ${theme.spacing(8)};
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
