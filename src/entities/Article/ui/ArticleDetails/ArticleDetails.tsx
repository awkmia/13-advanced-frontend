import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string,
    children?: ReactNode
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const {
        children,
        className,
    } = props;

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {};

    return (
        <div className={classNames(cls.articledetails, mods, [className])}>
            {children}
        </div>
    );
};
