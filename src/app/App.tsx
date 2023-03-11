/* Utils */
import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/* Styles */
import './styles/index.scss';

/* App */
import { useTheme } from 'app/providers/ThemeProvider';

/* Shared */
import { classNames } from 'shared/lib/classNames/classNames';

/* Widgets */
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
