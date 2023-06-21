import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string,
    children?: ReactNode
}

export const Page = (props: PageProps) => {
    const {
        children,
        className,
    } = props;

    const mods: Record<string, boolean> = {};

    return (
        <section className={classNames(cls.Page, mods, [className])}>
            {children}
        </section>
    );
};
