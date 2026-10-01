import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { paper: "#f4efe7", ink: "#1c1917", muted: "#6b6258", line: "#e4d9cc", clay: "#c45c26", sage: "#35584a" } } },
  plugins: [],
};
export default config;
