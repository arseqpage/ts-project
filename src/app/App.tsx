/* Utils */
import { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/* Styles */
import './styles/index.scss';

/* App */
import { useTheme } from 'app/providers/ThemeProvider';

/* Shared */
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';

/* Widgets */
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <button onClick={() => { setIsOpen(true); }}>toggle</button>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>Okay</Modal>

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
