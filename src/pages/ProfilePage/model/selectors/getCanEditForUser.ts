import { createSelector } from 'reselect';
import { StateSchema } from '@/app/providers/StoreProvider';

const authData = (state: StateSchema) => state.user.authData;
const profileData = (state: StateSchema) => state.profile?.data;

export const getCanEditForUser = createSelector(
    authData,
    profileData,
    (auth, profile) => (auth?.id === profile?.id),
);
