import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/roteConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <div
            className={
                classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
            }
            data-testid="sidebar"
        >
            <div className={cls.links}>
                <div className={cls.link}>
                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.RED}
                        className={cls['route-link']}
                    >
                        <HomeIcon className={cls['link-icon']} />

                        {!collapsed && t('Главная')}
                    </AppLink>
                </div>

                <div className={cls.link}>
                    <AppLink
                        to={RoutePath.about}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls['route-link']}
                    >
                        <AboutIcon className={cls['link-icon']} />

                        {!collapsed && t('О сайте')}
                    </AppLink>
                </div>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher
                    className=""
                    size={ButtonSize.M}
                />
                <LangSwitcher short={collapsed} />
                <Button
                    data-testid="sidebar-toggle"
                    type="button"
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTER}
                    square
                    size={ButtonSize.M}
                >
                    {
                        collapsed
                            ? '>'
                            : '<'
                    }
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;
