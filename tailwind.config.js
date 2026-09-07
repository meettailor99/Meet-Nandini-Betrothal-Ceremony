/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blush Rose & Rose Gold Theme Primary Tokens
        rose: {
          DEFAULT: '#D48C95',
          light: '#FBE4E8',
          dark: '#9E4B56',
          water: '#F8D7DA',
          dust: '#6E434D',
          50: '#FFF5F6',
          100: '#FBE4E8',
          200: '#F8D7DA',
          300: '#E8B4B8',
          400: '#D48C95',
          500: '#B86B77',
          600: '#9E4B56',
          700: '#823B44',
          800: '#6E434D',
          900: '#4A2E35',
        },
        blush: {
          DEFAULT: '#FBE4E8',
          light: '#FFF2ED',
          dark: '#F4CBD0',
          rose: '#E8B4B8',
        },
        rosegold: {
          DEFAULT: '#D48C95',
          light: '#E8B4B8',
          dark: '#9E4B56',
          deep: '#823B44',
          shimmer: '#F0C2C6',
        },
        plum: {
          DEFAULT: '#4A2E35',
          light: '#6E434D',
          dark: '#361F25',
        },
        
        // Theme Aliases (updated to Blush Rose & Rose Gold)
        ivory: {
          DEFAULT: '#FFF9F6',
          warm: '#FFF2ED',
          light: '#FFFFFF',
        },
        cream: {
          DEFAULT: '#FFF2ED',
          light: '#FFF9F6',
          dark: '#F8E5DF',
        },
        sand: {
          DEFAULT: '#F8E5DF',
          light: '#FFF2ED',
          dark: '#F4CBD0',
        },
        nude: {
          DEFAULT: '#F8D7DA',
          light: '#FBE4E8',
          dark: '#E8B4B8',
        },
        champagne: {
          DEFAULT: '#E6C594',
          light: '#F5E5C9',
          dark: '#C5A065',
        },
        sage: {
          DEFAULT: '#D48C95', // Rose Gold accent
          light: '#E8B4B8',
          dark: '#9E4B56',
        },
        olive: {
          DEFAULT: '#9E4B56', // Deep Rose accent
          light: '#B86B77',
          dark: '#823B44',
        },
        taupe: {
          DEFAULT: '#4A2E35', // Deep Rosewood dark text
          light: '#6E434D',
          dark: '#361F25',
        },
        gold: {
          DEFAULT: '#C5A065',
          light: '#E6C594',
          dark: '#9E783E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'sage-glow': '0 0 25px rgba(212, 140, 149, 0.4)',
        'rose-glow': '0 0 25px rgba(212, 140, 149, 0.45)',
        'nude-glow': '0 0 20px rgba(248, 215, 218, 0.5)',
        'card-nude': '0 15px 35px -5px rgba(74, 46, 53, 0.12), 0 0 15px rgba(212, 140, 149, 0.18)',
        'envelope-depth': '0 20px 45px rgba(74, 46, 53, 0.22)',
      },
      backgroundImage: {
        'nude-gradient': 'linear-gradient(135deg, #FFF9F6 0%, #FBE4E8 50%, #F8D7DA 100%)',
        'sage-gradient': 'linear-gradient(135deg, #E8B4B8 0%, #D48C95 50%, #9E4B56 100%)',
        'rose-gradient': 'linear-gradient(135deg, #E8B4B8 0%, #D48C95 50%, #9E4B56 100%)',
        'nude-radial': 'radial-gradient(circle at center, #FFF9F6 0%, #FBE4E8 60%, #F8D7DA 100%)',
        'sand-radial': 'radial-gradient(circle at center, #FFF9F6 0%, #FFF2ED 70%, #F8E5DF 100%)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        'shine-sweep': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'shine-sweep': 'shine-sweep 4s linear infinite',
      }
    },
  },
  plugins: [],
}
