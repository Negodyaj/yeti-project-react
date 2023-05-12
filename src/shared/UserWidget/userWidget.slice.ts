import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserWidgetState {
  name: string;
  status: string;
  avatarLink: string;
}

const initialState: UserWidgetState = {
  name: '',
  avatarLink: '',
  status: '',
};

interface LoadUserPayload {
  name: string;
  status: string;
}

export const userWidgetSlice = createSlice({
  name: 'userWidget',
  initialState: initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<LoadUserPayload>) => {
      state.name = action.payload.name;
      state.status = action.payload.status;
    },
    logOut: (state) => {
      state.name = '';
      state.status = '';
      state.avatarLink = '';
    },
  },
});

export const { loadUser, logOut } = userWidgetSlice.actions;

export const userWidgetReducer = userWidgetSlice.reducer;
