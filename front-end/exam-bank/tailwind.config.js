module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme("colors"),
			answer: "#0075ffd9",
			question: "#02e6f1",
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
