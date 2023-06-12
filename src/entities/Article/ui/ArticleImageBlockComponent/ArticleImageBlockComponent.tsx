import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string,
    children?: ReactNode
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const {
        children,
        className,
    } = props;

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {};

    return (
        <div className={classNames(cls.articleimageblockcomponent, mods, [className])}>
            {children}
        </div>
    );
};
