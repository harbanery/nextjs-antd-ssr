import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ant-design/react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-jakarta-sans)", "sans-serif"],
        emoji: ["var(--font-noto-emoji)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          main: "#2d2a70",
          on: "#d5d4e2",
          container: "#b9b8cf",
          onContainer: "#0f0e25",
          gradient:
            "linear-gradient(114deg, rgba(45,42,112,1) 0%, rgba(45,42,106,1) 28%, rgba(38,35,96,1) 61%, rgba(34,31,89,1) 83%, rgba(29,27,78,1) 100%)",
          inverse: "#504e88",
        },
        secondary: {
          main: "#ED6B23",
          on: "#fbe1d3",
          container: "#f9ceb6",
          onContainer: "#4f240c",
          gradient:
            "linear-gradient(119deg, rgba(227,105,37,1) 0%, rgba(237,107,35,1) 21%, rgba(208,108,53,1) 48%, rgba(187,89,34,1) 75%, rgba(164,72,21,1) 100%)",
        },
        neutral: {
          header: "#FFFFFF",
          footer: "#192A3E",
        },
      },
      fontSize: {
        "display-large": ["57px", { lineHeight: "64px", fontWeight: "800" }],
        "display-medium": ["45px", { lineHeight: "52px", fontWeight: "800" }],
        "display-small": ["36px", { lineHeight: "44px", fontWeight: "700" }],
        "display-xsmall": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "headline-large": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-medium": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-small": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "title-large": ["22px", { lineHeight: "28px", fontWeight: "600" }],
        "title-semi-large": ["18px", { lineHeight: "24px", fontWeight: "600" }],
        "title-medium": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "title-small": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "label-xlarge": ["18px", { lineHeight: "24px", fontWeight: "700" }],
        "label-large": ["16px", { lineHeight: "24px", fontWeight: "700" }],
        "label-medium": ["14px", { lineHeight: "20px", fontWeight: "700" }],
        "label-small": ["12px", { lineHeight: "18px", fontWeight: "700" }],
        "label-xsmall": ["10px", { lineHeight: "18px", fontWeight: "700" }],
        "body-large": ["18px", { lineHeight: "26px", fontWeight: "400" }],
        "body-medium": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-small": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-xsmall": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "body-xxsmall": ["10px", { lineHeight: "14px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
export default config;
