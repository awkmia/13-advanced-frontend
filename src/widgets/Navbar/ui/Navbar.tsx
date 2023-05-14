import React from 'react';
import {Link} from "react-router-dom";
import cls from "./Navbar.module.scss"
import {classNames} from "shared/lib/classNames/classNames";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Link to={'/'} className={cls.mainLink}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
            </div>
        </div>
    );
};
