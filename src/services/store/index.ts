import { configureStore } from "@reduxjs/toolkit"
import counter from "services/reducers/counter"

const store = configureStore({
  reducer: {
    counter: counter
  },
  devTools: process.env.NODE_ENV === 'development'
})

export default store