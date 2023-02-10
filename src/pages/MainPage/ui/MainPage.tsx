import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation('main-page');

    return (
        <div>
            {t('Главная страница')}
            {t('Новый перевод')}
        </div>
    );
};

export default MainPage;