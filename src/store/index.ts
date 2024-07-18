import { configureStore } from "@reduxjs/toolkit"
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from "react-redux"

import * as commonSlice from "./common-store"

const store = configureStore({
  reducer: {
    commonStore: commonSlice.reducer
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useEqualSelector: TypedUseSelectorHook<IRootState> = payload => useSelector(payload, shallowEqual)
export const useAppDispatch: () => DispatchType = useDispatch

export { commonSlice }

export default store
