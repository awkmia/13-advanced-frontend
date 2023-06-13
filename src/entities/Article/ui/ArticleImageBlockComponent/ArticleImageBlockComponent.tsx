import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string,
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {};

    return (
        <div className={classNames(cls.articleImageBlockComponent, mods, [className])}>
            ArticleImageBlockComponent
        </div>
    );
});
