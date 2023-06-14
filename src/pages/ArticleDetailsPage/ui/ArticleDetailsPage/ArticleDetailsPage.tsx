import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentList
                isLoading
                comments={[
                    {
                        id: '1',
                        text: 'Comment 1',
                        user: { id: '1', username: 'awkmia', avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg' },
                    },
                    {
                        id: '2',
                        text: 'Comment 2',
                        user: { id: '2', username: 'ulbi', avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg' },
                    },
                ]}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
