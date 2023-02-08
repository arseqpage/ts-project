import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";

const App = () => {
    const { theme, handleChangeTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={handleChangeTheme}>Change theme</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <AppRouter/>
        </div>
    );
};

export default App;