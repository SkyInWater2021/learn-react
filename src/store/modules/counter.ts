import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 21,
    message: "hello redux"
  },
  reducers: {}
})

export default counterSlice.reducer
