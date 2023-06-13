import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string,
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {};

    return (
        <div className={classNames(cls.articleTextBlockComponent, mods, [className])}>
            ArticleTextBlockComponent
        </div>
    );
});
