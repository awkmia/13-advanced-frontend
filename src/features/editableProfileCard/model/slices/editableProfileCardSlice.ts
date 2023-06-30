import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema';

const initialState: EditableProfileCardSchema = {
    
};

export const editableProfileCardSlice = createSlice({
    name: 'editableProfileCard',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: editableProfileCardActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;