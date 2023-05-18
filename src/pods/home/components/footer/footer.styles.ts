import { css } from "@emotion/css";

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

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30%;
  
  img {
    cursor: pointer;
  }
`;

export const popUp = css`
  display: none;
`;

export const icon = css`
    width: 30px;
    height: 30px;
`;
