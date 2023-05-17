import {css} from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  margin: 5rem 0rem;
  color: #25314d;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;

export const nav = css`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30%;

  }

`;

export const popUp = css`
  display: none;
`;

export const a = css`
  width: 30px;
  height: 30px;

  img {
    min-width: 30px;
    min-height: 30px;
    width: 100%;
    height: 100%;
  }
`;
