/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4E69FE",
        secondaryColor: "#FBFAFE",
        "secondaryColor-darker": "#EFEFF8",
        redColor: "#FF4845",
        gray: {
          400: "#E7E7E7",
          600: "#A0A0A0",
          700: "#E7E7E7",
          800: "#F2F2F2",
        },
        black: {
          900: "#1b1b1b",
        },
        pallete: {
          purple: "#6D76FE",
          orange: "#FFB05E",
          red: "#FF6167",
          green: "#61CE6B",
          bluesky: "#35D9D7",
          violet: "#D879EE",
        },
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        ten: "10px",
        five: "5px",
      },
      boxShadow: {
        "shadow-1": "0px 7px 40px 0px #0000000D",
        "shadow-2": "0px 5px 40px 0px #0000000D",
      },
      width: {
        "page-menu": "369px",
        "page-content": "calc(100% - 369px)",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
