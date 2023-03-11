/* App */
import { Theme, useTheme } from 'app/providers/ThemeProvider'

/* Styles */

/* Shared */
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
  const { theme, handleChangeTheme } = useTheme()

  return (
    <Button
      onClick={handleChangeTheme}
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
    </Button>
  )
}

export default ThemeSwitcher
