/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        'twitch-blue':'#037EF3',
        'trovo-green':'#4BB36C',
        'kick-green':'#39C338',        
        stripe:
        {
          'elements-color': '#6772e5',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
