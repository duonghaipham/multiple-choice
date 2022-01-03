module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundImage: {
			home: "url('/img/home.jpg')",
			math: "url('/img/math_background.jpg')",
			english: "url('/img/english_background.jpg')",
			history: "url('/img/hero.jpg')",
			geography: "url('/img/hero.jpg')",
			physics: "url('/img/hero.jpg')",
			chemistry: "url('/img/hero.jpg')",
			biology: "url('/img/hero.jpg')",
			civicEducation: "url('/img/hero.jpg')",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
