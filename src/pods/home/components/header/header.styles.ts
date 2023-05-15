import {css} from '@emotion/css';
import { theme } from '../../../../theme';


export const root = css`

display: flex;
flex-direction: column;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const mainImg = css`

img {

    max-width: 170px;
    width: 100%;

@media (min-width: 1024px) {
    max-width: 378px;
  }
 }
`;

export const boxTitle = css`
 
 display: flex;
 flex-direction: column;
 justify-content: center;
 text-align: center;
`;


export const title = css`
  color: ${theme.palette.text_header};
  font-weight: 700;
  font-size: 25px;
  line-height: 37px;

  span {
    font-size: 34px;
    line-height: 50px;
    color: ${theme.palette.danger};
  }
`;

