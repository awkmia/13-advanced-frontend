import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string,
    id: string,
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        id,
        className,
    } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {};

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articledetails, mods, [className])}>
                ARTICLE DETAILS COMP
            </div>
        </DynamicModuleLoader>
    );
});
