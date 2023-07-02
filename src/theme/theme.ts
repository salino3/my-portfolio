const BASE_SPACING = 4;

export const theme = {
  background: {
    light: "#FFFFFF",
    middle: "10, 34, 48, 0.25",
    dark: {
      background: "#0A2230",
      border: "1px solid #000000",
    },
  },
  palette: {
    primary: "#21243D",
    important: "#D71E38",
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
    gql: {
      width: "80%",
      background: "#E535AB",
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
    vue: {
      width: "70%",
      background: "#4FC08D",
    },
    css: {
      width: "100%",
      background: "#33A9DC",
    },
    github: {
      width: "80%",
      background: "#000000",
    },
    vsc: {
      width: "100%",
      background: "#007ACC",
    },
    bootstrap: {
      width: "90%",
      background: "#6639B6",
    },
    git: {
      width: "70%",
      background: "#F34F29",
    },
    html: {
      width: "100%",
      background: "#F16529",
    },
    docker: {
      width: "60%",
      background: "#2496ED",
    },
    react: {
      width: "100%",
      background: "#61DAFB",
    },
    angular: {
      width: "70%",
      background: "#DD0031",
    },
    mui: {
      width: "60%",
      background: "#1976D2",
    },
  },
  rutaMyEmail: "programacionflavio@gmail.com",
  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};
