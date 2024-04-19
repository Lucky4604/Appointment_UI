/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#e6e6e6",
          "300": "#e5e5e5",
          "400": "#e2e2e2",
          "500": "#e1e1e1",
          "600": "#e0dfdf",
          "700": "#dedee3",
          "800": "#dcdcdc",
          "900": "#d8d8d8",
          "1000": "rgba(222, 222, 227, 0)",
        },
        gray: {
          "100": "#fafafa",
          "200": "#939393",
          "300": "#8e8e8e",
          "400": "#8a8a8a",
          "500": "#818181",
          "600": "#2b2b2b",
          "700": "#212529",
          "800": "#1f1f1f",
          "900": "#131313",
          "1000": "#0d0d0d",
        },
        "neutrals-900": "#2e2f2e",
        darkgray: "#979797",
        darkslategray: {
          "100": "#474747",
          "200": "#333548",
          "300": "#313131",
          "400": "#2f2f2f",
          "500": "rgba(51, 53, 72, 0.5)",
          "600": "rgba(51, 53, 72, 0.71)",
        },
        darkolivegreen: {
          "100": "#3a643b",
          "200": "rgba(58, 100, 59, 0.52)",
        },
        seagreen: "#618a61",
        whitesmoke: {
          "100": "#ebebeb",
          "200": "#eaeaea",
        },
        lightgray: "#d1d1d1",
        black: "#000",
        goldenrod: "#f1b93a",
        tomato: "#d5512e",
        mintcream: {
          "100": "#f2fbf2",
          "200": "#eaf2ea",
        },
        dimgray: {
          "100": "#626262",
          "200": "#606060",
          "300": "#585858",
          "400": "#505050",
        },
        ghostwhite: {
          "100": "#f7f7fc",
          "200": "rgba(247, 247, 252, 0)",
        },
        silver: "#c7c7c7",
        floralwhite: {
          "100": "#fffcf2",
          "200": "#fffbf1",
        },
        slateblue: {
          "100": "rgba(84, 94, 201, 0.04)",
          "200": "rgba(46, 55, 164, 0.04)",
        },
        oldlace: "#fff7e2",
        antiquewhite: "#e6dec9",
      },
      spacing: {},
      fontFamily: {
        "body-1-regular": "Nunito",
        inter: "Inter",
        "gotham-rounded": "'Gotham Rounded'",
        poppins: "Poppins",
        dinpro: "DINPro",
        "dinpro-bold": "DINPro-Bold",
      },
      borderRadius: {
        lg: "18px",
        mid: "17px",
        "21xl": "40px",
        mini: "15px",
        "3xl": "22px",
        "2xs": "11px",
        "3xs": "10px",
        "4xs": "9px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      sm: "14px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
