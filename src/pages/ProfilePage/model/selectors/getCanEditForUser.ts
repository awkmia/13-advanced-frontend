import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from 'reselect';

const authData = (state: StateSchema) => state.user.authData;
const profileData = (state: StateSchema) => state.profile?.data;

export const getCanEditForUser = createSelector(
    authData,
    profileData,
    (auth, profile) => (auth?.id === profile?.id),
);
