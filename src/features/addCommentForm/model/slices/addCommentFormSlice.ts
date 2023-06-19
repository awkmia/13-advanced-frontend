import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';
// import { fetchAddCommentForm } from '../services/fetchAddCommentForm/fetchAddCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchAddCommentForm.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchAddCommentForm.fulfilled, (
    //             state,
    //             action: PayloadAction<string>,
    //         ) => {
    //             state.isLoading = false;
    //             state.text = action.payload;
    //         })
    //         .addCase(fetchAddCommentForm.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
