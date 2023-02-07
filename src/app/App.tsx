import React, {Suspense, useContext, useState} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";

const App = () => {
    const { theme, handleChangeTheme} = useTheme();

    const bool = true;

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={handleChangeTheme}>Change theme</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;