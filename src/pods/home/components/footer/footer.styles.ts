import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  margin: ${theme.spacing(24)} 0px;
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
