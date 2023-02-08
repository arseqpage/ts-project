import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/roteConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route key={path} element={element} path={path}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;