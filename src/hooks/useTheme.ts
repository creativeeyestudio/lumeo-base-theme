import { useState, useEffect } from 'react'

export type ThemeMode = 'light' | 'dark'

export const useTheme = (defaultMode: ThemeMode = 'light') => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode)

  // Persistance dans localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeMode
    if (saved) setMode(saved)
  }, [])

  const toggleTheme = () => {
    const newMode: ThemeMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('theme', newMode)
  }

  return { mode, toggleTheme }
}
