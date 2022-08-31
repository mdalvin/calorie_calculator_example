/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(https://ik.imagekit.io/6tebrod5l/golden_dynamic/bg_golden_FDRox1Mpb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661330712387)",
        benefit:
          "url(https://ik.imagekit.io/6tebrod5l/golden_dynamic/benefit_sSnLIzk_Vz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661333184386)",
        career:
          "url(https://ik.imagekit.io/6tebrod5l/golden_dynamic/career_hero_fC_lkqbRO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661355329536)",
        support:
          "url(https://ik.imagekit.io/6tebrod5l/golden_dynamic/support_NdtJF_qhk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661491323376)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#0B2E60",
      secondary: "#F3745A",
      tertiary: "#3E96FB",
      neutral: "#FFF",
      title: "#1b1b1b",
      desc: "#7f7f7f",
    },
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      secondary: ["Open Sans", "serif"],
      tertiary: ["Fira Sans", "serif"],
      brand: ["Italiana", "serif"],
      content: ["Murecho", "serif"],
    },
  },
  plugins: [],
};
