import cls from "./ThemeSwitcher.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import React from "react";
import {useTheme, Theme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </button>
    );
};