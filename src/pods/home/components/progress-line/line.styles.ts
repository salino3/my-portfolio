import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { theme } from "../../../../theme";


export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  img {
    max-height: 26px;
    max-width: 26px;
    height: 100%;
    width: 100%;

    @media (min-width: 1024px) {
      max-height: 40px;
      max-width: 40px;
    }
  }
`;

export const progressBar = css`
  height: 26px;
  background: #fdfdfd;
  width: 100%;

  @media (min-width: 1024px) {
   height: 40px;
  }
`;

export const Line = styled.div`
  height: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  padding-left: ${theme.spacing(1)};
  color: ${theme.palette.text_content};
`;