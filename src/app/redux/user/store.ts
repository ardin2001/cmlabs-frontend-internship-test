import { configureStore } from '@reduxjs/toolkit'
import { reducerMeal } from './mealSlice'
import { reducerCategory } from './categorySlice'
import logger from 'redux-logger'

const storeUser = configureStore({
  reducer: {
    meals: reducerMeal,
    categories: reducerCategory,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,),
})
export default storeUser;