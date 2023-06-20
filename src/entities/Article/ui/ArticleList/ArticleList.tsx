import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            articles={article}
            view={view}
        />

    );

    const mods: Record<string, boolean> = {};

    return (
        <div className={classNames(cls.ArticleList, mods, [className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});
