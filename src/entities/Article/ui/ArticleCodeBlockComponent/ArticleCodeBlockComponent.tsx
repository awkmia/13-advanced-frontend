import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string,
    children?: ReactNode
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const {
        children,
        className,
    } = props;

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {};

    return (
        <div className={classNames(cls.articlecodeblockcomponent, mods, [className])}>
            {children}
        </div>
    );
};
