/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                wavy: ["wavy", "sans-serif"],
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".wavy-solid": {
                    backgroundColor: "#ffe8a9",
                    boxShadow: `
                      inset -2px -2px 0 0 #443d2d,
                      inset 2px 2px 0 0 #fffaee,
                      inset -4px -4px 0 0 #c4b795,
                      inset 4px 4px 0 0 #ffeec0
                    `,
                },
                ".wavy-hollow": {
                    backgroundColor: "#ffffff",
                    boxShadow: `
                      inset -2px -2px 0 0 #fffaee,
                      inset 2px 2px 0 0 #443d2d,
                      inset -4px -4px 0 0 #ffeec0,
                      inset 4px 4px 0 0 #c4b795
                `,
                },
            })
        },
    ],
}
