import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
            <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                Toggle
            </button>

            <div className={cls.switchers}>
                <ThemeSwitcher className="" />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
