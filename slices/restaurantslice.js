import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  restaurant: null,
}
export const restaurantslice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant= action.payload
    },
  },
})
// Action creators are generated for each case reducer function
export const {setRestaurant} = restaurantslice.actions
export const selectRestaurant=state=>state.restaurant.restaurant;
export default restaurantslice.reducer