import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProfilePageState {
  name: string;
  email: string;
  website: string;
  phone: string;
}

const initialState: ProfilePageState = {
  name: '',
  email: '',
  website: '',
  phone: '',
};

interface CurrentUserPayload {
  name: string;
  email: string;
  website: string;
  phone: string;
}

const profilePageSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<CurrentUserPayload>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.website = action.payload.website;
      state.phone = action.payload.phone;
    },
  },
});

export const { loadData } = profilePageSlice.actions;

export const profilePageReducer = profilePageSlice.reducer;
