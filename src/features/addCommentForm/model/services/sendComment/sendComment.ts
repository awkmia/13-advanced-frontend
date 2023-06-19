import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { Comment } from 'entities/Comment';
import { addCommentFormActions } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>>(
        'addCommentForm/sendComment',
        async (_, thunkApi) => {
            const {
                extra, dispatch, rejectWithValue, getState,
            } = thunkApi;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());
            const text = getAddCommentFormText(getState());

            if (!userData || !text || !article) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(addCommentFormActions.setText(''));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
