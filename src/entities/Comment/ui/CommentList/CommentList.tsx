import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import clsComment from '../CommentCard/CommentCard.module.scss';

interface CommentListProps {
    className?: string,
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {};

    if (isLoading) {
        return (
            <>
                <div className={classNames(clsComment.CommentCard, {}, [className])}>
                    <div className={clsComment.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton height={16} width={100} className={clsComment.username} />
                    </div>
                    <Skeleton className={clsComment.text} width="100%" height={50} />
                </div>
                <div className={classNames(clsComment.CommentCard, {}, [className])}>
                    <div className={clsComment.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton height={16} width={100} className={clsComment.username} />
                    </div>
                    <Skeleton className={clsComment.text} width="100%" height={50} />
                </div>
            </>
        );
    }

    return (
        <div className={classNames(cls.CommentList, mods, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            isLoading={isLoading}
                            className={cls.comment}
                            comment={comment}
                        />
                    ))
                    : <Text text={t('Комментарии отсутствуют.')} />
            }
        </div>
    );
});
