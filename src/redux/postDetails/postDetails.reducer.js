import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPostDetails = createAsyncThunk(
  'postDetails/get',
  async (postId, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      // ЦЕ БУДЕ ЗАПИСАНО В ACTION.PAYLOAD РЕДЬЮСЕРУ
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchPostDetails2 = createAsyncThunk(
  'postDetails2/get',
  async (postId, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      // ЦЕ БУДЕ ЗАПИСАНО В ACTION.PAYLOAD РЕДЬЮСЕРУ
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://655bae09ab37729791a977d8.mockapi.io/contacts`
      );
      // ЦЕ БУДЕ ЗАПИСАНО В ACTION.PAYLOAD РЕДЬЮСЕРУ
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  postDetails: null,
  contacts: [],
  isLoading: false,
  error: null,
};

const postDetailsSlice = createSlice({
  // Ім'я слайсу
  name: 'postDetails',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchPostDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postDetails = payload;
      })
      .addCase(fetchPostDetails2.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postDetails = payload;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        // TODO: handle add logic here
      })

      .addMatcher(
        isAnyOf(
          fetchPostDetails2.pending,
          fetchPostDetails.pending,
          fetchContacts.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPostDetails2.rejected,
          fetchPostDetails.rejected,
          fetchContacts.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

// Редюсер слайсу
export const postDetailsReducer = postDetailsSlice.reducer;
