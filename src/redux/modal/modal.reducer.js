import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenModal: false,
  modalData: null,
};

const modalSlice = createSlice({
  // Ім'я слайсу
  name: 'modal',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpenModal = true;
      state.modalData = payload;
    },
    closeModal: state => {
      state.isOpenModal = false;
      state.modalData = null;
    },
  },
});

// Генератори екшен криейторів
export const { openModal, closeModal } = modalSlice.actions;
// Редюсер слайсу
export const modalReducer = modalSlice.reducer;
