import { createSlice } from '@reduxjs/toolkit';
const productsData = [
  {
    id: 'Wdawdawd',
    title: 'Tacos With Lime M',
    price: 5.85,
    discount: 15,
  },
  {
    id: '312dwadawd',
    title: 'Tacos With Lime XXL',
    price: 10.99,
    discount: 30,
  },
  {
    id: '@#21dwdaw',
    title: 'Tacos With Lime XL',
    price: 6.99,
    discount: null,
  },
  {
    id: 'd12dsda@@!',
    title: 'Tacos S',
    price: 1.5,
    discount: null,
  },
  {
    id: 'DWafg32fd23f2',
    title: 'Tacos With Cheese',
    price: 3.4,
    discount: 0.2,
  },
];

const initialState = {
  products: [], // [{}, {}, ...]
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  // Ім'я слайсу
  name: 'products',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addProduct(state, { payload }) {
      // state.products = [...state.products, payload];
      state.products.push(payload);
    },
    deleteProduct(state, { payload }) {
      state.products = state.products.filter(product => product.id !== payload);
    },
  },
});

// Генератори екшен криейторів
export const { deleteProduct, addProduct } = productsSlice.actions;
// Редюсер слайсу
export const productsReducer = productsSlice.reducer;













// const intitialState = {
//   products: JSON.parse(localStorage.getItem('products')) ?? productsData, // [{}, {}, ...]
// };

// export const productsReducer = (state = intitialState, action) => {
//   // action -> { type: "products/deleteProduct", payload: "w1231" }
//   // action -> { type: "products/addProduct", payload: { id: "w1231", price: 10, title: "Samsung", ... } }
//   switch (action.type) {
//     case 'products/deleteProduct': {
//       return {
//         ...state,
//         products: state.products.filter(
//           product => product.id !== action.payload
//         ),
//       };
//     }
//     case 'products/addProduct': {
//       // state.products = [...state.products, action.payload];❌
//       return {
//         ...state,
//         products: [...state.products, action.payload], // ✅
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const deleteProduct = (payload) => {
//   return {
//     type: 'products/deleteProduct',
//     payload,
//   };
// }
// export const addProduct = (payload) => {
//   return {
//     type: 'products/addProduct',
//     payload,
//   };
// }
