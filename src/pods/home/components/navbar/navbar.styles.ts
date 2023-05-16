import { css } from "@emotion/css";
import { theme } from "../../../../theme";

export const container = css`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: ${theme.spacing(8)} ${theme.spacing(8)};

  @media (min-width: 1024px) {
    padding: ${theme.spacing(8)} ${theme.spacing(16)};
  }
`;

export const content = css`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing(8)};
`;

