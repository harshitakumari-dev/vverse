import type { Config } from "tailwindcss";

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
      backdropFilter: {
        'none': 'none',
        'blur-sm': 'blur(4px)',
        'brightness-75': 'brightness(0.75)',
      },
    },
  
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    },
  },
  plugins: [],
};
export default config;
