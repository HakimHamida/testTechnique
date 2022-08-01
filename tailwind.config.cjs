module.exports = {
	content: [
		'./src/routes/**/*.{svelte,js,ts}',
		'./src/lib/**/*.{svelte,js,ts}'
	],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};