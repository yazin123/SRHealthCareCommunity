/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkslategray: "#313131",
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#e6e6e6",
          "300": "#d9d9d9",
        },
        gray: {
          "100": "#fcfcfc",
          "200": "rgba(0, 0, 0, 0.8)",
          "300": "rgba(255, 255, 255, 0.41)",
          "400": "rgba(0, 0, 0, 0.4)",
        },
        darkslateblue: {
          "100": "#5766bf",
          "200": "#4959b3",
          "300": "#4858af",
          "400": "#30409a",
          "500": "rgba(65, 81, 171, 0.12)",
          "600": "rgba(73, 89, 179, 0.19)",
          "700": "rgba(87, 102, 191, 0.09)",
        },
        cornflowerblue: "#7080d9",
        aquamarine: "#39e1b4",
        silver: "rgba(192, 192, 192, 0.12)",
        lightcyan: "#d7f5ed",
      },
      spacing: {},
      fontFamily: {
        "lexend-deca": "'Lexend Deca'",
      },
      borderRadius: {
        mini: "15px",
        "2xs": "11px",
        "2xs-2": "10.2px",
        "5xs-8": "7.8px",
        smi: "13px",
        "12xl": "31px",
        mid: "17px",
        "3xs": "10px",
        "21xl": "40px",
      },
    },
    fontSize: {
      "normalss": "12",
      "7xl": "26px",
      "2xl": "21px",
      "5xl": "24px",
      lgi: "19px",
      "9xl": "28px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "29xl": "48px",
      "19xl": "38px",
      "13xl": "32px",
      "21xl": "40px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
