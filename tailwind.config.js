/** @type {import('tailwindcss').Config} */
/* eslint-disable max-len */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens:{
      xs: '480px',
      smBETWEENxs: '560px',
      sm: '640px',
      mdBETWEENsm: '704px',
      md: '768px',
      lgBETWEENmd: '896px',
      lg: '1024px',
      xlBETWEENlg: '1147px',
      xl: '1270px',
    },
    transparent: "transparent",
    current: "currentColor",
    fontFamily: {
      sans: ["Hanken Grotesk", 'sans-serif'],
    },
    extend: {
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
        'spline': ['"Spline Sans"', 'sans-serif'],
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        // darkGray: "#333943",
        darkGray: "#1c1f24",
        lightGray: "#616d72",
        'vm-blue': '#3F47FF',
        'vm-yellow': '#FDE12D',
        'vm-light-yellow': '#EDFF86',
        'vm-lighter-yellow': '#F0F8BB',
        'vm-violet': '#9229E5',
        'vm-lavender': '#F9B6FE',
        'vm-aqua': '#00E8FC',
        'vm-brown': '#51180B',
        'vm-gray': '#EEEDE9',
        'vm-green': '#00E075',
        'vm-accent': '#FED766',
        bananaYellowLight: '#FFFCE6',
        bananaYellow: '#FDE12D',
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#ffffff", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "#9ca3af", // gray-400
            DEFAULT: "#6b7280", // gray-500
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229", // custom
            muted: "#172554", // blue-950
            subtle: "#1e40af", // blue-800
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#60a5fa", // blue-400
            inverted: "#030712", // gray-950
          },
          background: {
            muted: "#131A2B", // custom
            subtle: "#1f2937", // gray-800
            DEFAULT: "#111827", // gray-900
            emphasis: "#d1d5db", // gray-300
          },
          border: {
            DEFAULT: "#1f2937", // gray-800
          },
          ring: {
            DEFAULT: "#1f2937", // gray-800
          },
          content: {
            subtle: "#4b5563", // gray-600
            DEFAULT: "#6b7280", // gray-600
            emphasis: "#e5e7eb", // gray-200
            strong: "#f9fafb", // gray-50
            inverted: "#000000", // black
          },
        },
      },
      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem"],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require("@headlessui/tailwindcss")],
});



/*


theme: {
  screens:{
    xs: '480px',
        sm: '640px',
        md: '768px',
        navBreak: '990px',
        lg: '1024px',
        xl: '1270px',
  },
  extend: {
    animation: {
      ["infinite-slider"]: "slideshow 10s linear infinite",
          ['move-blob']: 'move 5s ease-in-out infinite',
    },
    keyframes: {
      slideshow: {
        "0%": { transform: "translateX(0)" },
        "100%": {
          transform: "translateX(calc(-250px * 5))",
        },
      },
      move: {
        '0%': 'scale-100 translate-x-10 -translate-y-30',
            '38%': 'scale-80 translate-x-[80vw] translate-y-[30vh] rotate-160',
            '40%': 'scale-80 translate-x-[80vw] translate-y-[30vh] rotate-160',
            '78%': 'scale-130 translate-x-0 translate-y-[50vh] rotate--20',
            '80%': 'scale-130 translate-x-0 translate-y-[50vh] rotate--20',
            '100%': 'scale-100 translate-x-10 -translate-y-30',
      },

    },
    colors: {
      'accent-1': '#FAFAFA',
          'accent-2': '#EAEAEA',
          'accent-7': '#333',
          success: '#0070f3',
          cyan: '#79FFE1',
          'vm-blue': '#3F47FF',
          'vm-yellow': '#FDE12D',
          'vm-light-yellow': '#EDFF86',
          'vm-lighter-yellow': '#F0F8BB',
          'vm-violet': '#9229E5',
          'vm-lavender': '#F9B6FE',
          'vm-aqua': '#00E8FC',
          'vm-brown': '#51180B',
          'vm-gray': '#EEEDE9',
          'vm-green': '#00E075',
          'vm-accent': '#FED766',
          bananaYellowLight: '#FFFCE6',
          bananaYellow: '#FDE12D'
    },
    fontFamily: {
      basis: ["Basis Grotesque Pro", "sans-serif"],
          sans: ['"Spline Sans"', 'sans-serif'],
    },
    spacing: {
      28: '7rem',
    },
    letterSpacing: {
      tighter: '-.04em',
    },
    lineHeight: {
      tight: 1.2,
    },
    fontSize: {
      '5xl': '2.5rem',
          '6xl': '2.75rem',
          '7xl': '4.5rem',
          '8xl': '6.25rem',
    },
    boxShadow: {
      small: '0 5px 10px rgba(0, 0, 0, 0.12)',
          medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
    }
  },
},
plugins: [],

*/
