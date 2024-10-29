import { configureStore } from '@reduxjs/toolkit'
import  extraSlice  from './extraSlice'

export const store = configureStore({
  reducer: {
    extra :extraSlice
  },
})

