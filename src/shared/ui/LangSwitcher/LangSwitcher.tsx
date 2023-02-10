import {useTranslation} from "react-i18next";
import Button, {ThemeButton} from "shared/ui/Button/Button";
import cls from './LangSwitcher.module.scss'
import {classNames} from "shared/lib/classNames/classNames";

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const handleChangeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return  (
            <Button
                onClick={handleChangeLanguage}
                theme={ThemeButton.CLEAR}
                className={classNames(cls.LangSwitcher)}
            >
                {t('Язык')}
            </Button>
    )
};

export default LangSwitcher;