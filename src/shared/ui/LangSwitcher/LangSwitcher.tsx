import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={handleChangeLanguage}
            theme={ButtonTheme.CLEAR}
            className={classNames('')}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};

export default LangSwitcher;
