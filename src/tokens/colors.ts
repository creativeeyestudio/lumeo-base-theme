const colors = {
  primary: '#2563eb',
  secondary: '#f43f5e',
  success: '#16a34a',
  warning: '#f59e0b',
  danger: '#dc2626',
  background: '#f9fafb',
  text: '#111827',
} as const

export type ColorTokens = typeof colors
export default colors