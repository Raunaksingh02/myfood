import { configureStore } from '@reduxjs/toolkit'
import cartslice from './slices/cartslice'
import restaurantslice from './slices/restaurantslice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const restaurantPersistConfig = {
  key: 'restaurant',
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartslice);
const persistedRestaurantReducer = persistReducer(restaurantPersistConfig, restaurantslice);


export const store = configureStore({
  reducer: {
    cart:persistedCartReducer,
    restaurant:persistedRestaurantReducer
  },
})

export const persistor = persistStore(store);