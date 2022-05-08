const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./dist/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				palette: {
					1: "#08647C",
					2: "#060192",
					3: "#F7513E",
					3: "#FCC455",
					4: "#FFCC4D",
					5: "#EE7584",
					6: "#7070D4",
				},
			},
			fontFamily: {
				righteous: ["righteous", ...defaultTheme.fontFamily.sans],
				roboto: ["roboto", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
