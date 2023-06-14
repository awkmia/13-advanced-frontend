import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema {
    isLoading?: boolean;
    error?: string;
    ids: string[];
    entities: Record<any, any>;
}
