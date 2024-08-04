/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      pokemon: ["pokemon"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      ghostWhite: "#f8f8ff",
      black: "#010101",
      midnight: "#121063",

      reddishOrange: "#ff0000",
      red: "#cc0000",
      blue: "#3b4cca",
      yellow: "	#ffde00",
      tanYellow: "#b3a125",

      lightBlue: "#30A7D7",
      pink: "#FF90C4",
      green: "#4DAD5B",
      purple: "#B38AEA",

      gray: "#4B4A49",
      lightGray: "#F2F2F2",
    },

    extend: {},
  },
  plugins: [],
};
