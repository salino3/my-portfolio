import { injectGlobal } from "@emotion/css";
import "@fontsource/heebo";
import { theme } from "./theme";

injectGlobal`

body {

  &::-webkit-scrollbar {
    display: none;
  }

  background-color: ${theme.background.light};
  width: 100%;
  height: 100%;
  overflow-y: auto;
  font-family: ${theme.fonts.fontFamily};
  font-weight: ${theme.fonts.fontWeight};
	position: relative;


  -ms-overflow-style: none;
  scrollbar-width: none;

 }

* {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
 }
`;
