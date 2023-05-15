const BASE_SPACING = 4;

export const theme = {
  background: {
    light: "#FFFFFF;",
    middle: { background: "#0A2230", 
              opacity: 0.25 
    },
    dark: {
      background: "#0A2230",
      border: "1px solid #000000",
    },
    icons: "#25314D",
  },
  palette: {
    primary: "#21243D",
    danger: "#D71E38",
    text_header: "#000000",
    text_content: "#FDFDFD",
  },
  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};