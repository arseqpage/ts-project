/* Utils */
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

/* Styles */
import './styles/index.scss'

/* App */
import { useTheme } from 'app/providers/ThemeProvider'
import AppRouter from './providers/router/ui/AppRouter'

/* Shared */
import { classNames } from 'shared/lib/classNames/classNames'

/* Widgets */
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App
