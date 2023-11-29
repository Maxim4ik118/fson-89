import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/auth.reducer';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/contacts');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContacThunk = createAsyncThunk(
  'contacts/add',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/contacts', formData);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(addContacThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContacThunk.pending,
          deleteContactThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContacThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
