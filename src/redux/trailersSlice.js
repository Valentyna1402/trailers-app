import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
 // state.isLoading = true;
};
const handleError = (state, action) => {
 // state.isLoading = false;
 // state.error = action.payload;
};

export const trailersSlice = createSlice({
  name: 'trailers',
  initialState: {
    items: [],
    favorite: [],
    isLoading: false,
    error: null,
  },
  reducers: {}
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleError)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleError)
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(deleteContact.rejected, handleError);
//   },
});