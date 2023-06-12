import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string,
    children?: ReactNode
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const {
        children,
        className,
    } = props;

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {};

    return (
        <div className={classNames(cls.articletextblockcomponent, mods, [className])}>
            {children}
        </div>
    );
};
