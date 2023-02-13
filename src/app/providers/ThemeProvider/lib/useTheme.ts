import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  theme: Theme
  handleChangeTheme: () => void
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleChangeTheme = () => {
    const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    if (setTheme != null) {
      setTheme(currentTheme)
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme)
  }

  return <UseThemeResult>{ theme, handleChangeTheme }
}
