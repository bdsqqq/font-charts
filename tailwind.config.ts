import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const waveAndLineFontVariablesAndUtilities = plugin(function ({
  theme,
  matchUtilities,
  addUtilities,
}) {
  matchUtilities(
    {
      font: (value) => {
        return {
          "--variable-font-wght": value,
        };
      },
    },
    {
      values: theme("fontWeight"),
      respectImportant: true,
      supportsNegativeValues: false,
    }
  );

  // when using font, surface the variable font settings through css variables
  addUtilities({
    ".font-wave": {
      "font-family": "var(--font-wavefont)",
      "font-variation-settings": `'wght' var(--variable-font-wght, 100), 'ROND' var(--variable-font-rond, 75), 'YELA' var(--variable-font-align, 0)`,
    },
    ".font-line": {
      "font-family": "var(--font-linefont)",
      "font-variation-settings": `'wght' var(--variable-font-wght, 100)`,
    },
  });
});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [waveAndLineFontVariablesAndUtilities],
};
export default config;
