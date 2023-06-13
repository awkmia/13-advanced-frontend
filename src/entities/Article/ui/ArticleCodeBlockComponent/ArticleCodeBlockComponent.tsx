import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string,
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {};

    return (
        <div className={classNames(cls.articleCodeBlockComponent, mods, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
});
