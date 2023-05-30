import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string,
    password: string,
}

// enum LoginErrors {
//     INCORRECT_DATA = '',
//     SERVER_ERROR = ''
// }

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            // @ts-ignore
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            // @ts-ignore
            extra.navigate('/about');
            return response.data;
        } catch (e) {
            console.log('error: ', e);
            return rejectWithValue('error');
        }
    },
);
