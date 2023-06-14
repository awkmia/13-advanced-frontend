import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: ['1', '2'],
        entities: {
            1: {
                id: '1',
                text: 'comment 1',
                user: { id: '1', username: 'user 1' },
            },
            2: {
                id: '2',
                text: 'comment 2',
                user: { id: '2', username: 'user 2' },
            },
        },
    }),
    reducers: {

    },

});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
