import type { Config } from 'tailwindcss'

const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#f43f5e',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
}

export default preset
