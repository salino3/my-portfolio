const BASE_SPACING = 4;

export const theme = {
  background: {
    light: "#FFFFFF",
    middle: { background: "rgba(10, 34, 48, 0.25)" },
    dark: {
      background: "#0A2230",
      border: "1px solid #000000",
    },
  },
  icons: "#25314D",
  palette: {
    primary: "#21243D",
    danger: "#D71E38",
    text_header: "#21243D;",
    text_content: "#FDFDFD",
  },
  fonts: {
    fontFamily: "Heebo",
    fontWeight: "normal",
  },
  skills: {
    emotion: {
      width: "100%",
      background: "#6639b6",
    },
    js: {
      width: "100%",
      background: "#F0DB4F",
    },
    ts: {
      width: "100%",
      background: "#007ACC",
    },
    sass: {
      width: "100%",
      background: "#CB6699",
    },
    node: {
      width: "80%",
      background: "#6DB35A",
    },
    mysql: {
      width: "70%",
      background: "#00758F",
    },
    mongoose: {
      width: "70%",
      background: "#3FA037",
    },
    css: {
      width: "100%",
      background: "#33A9DC",
    },
    github: {
      width: "80%",
      background: "#000000",
    },
    bootstrap: {
      width: "90%",
      background: "#6639B6"
    },
    html: {
      width: "100%",
      background: "#F16529",
    },
  },
  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};


