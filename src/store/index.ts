import { configureStore } from "@reduxjs/toolkit"
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from "react-redux"

import * as commonSlice from "./common-store"
import * as menuSlice from "./menu-store"

const store = configureStore({
  reducer: {
    commonStore: commonSlice.reducer,
    menuStore: menuSlice.reducer
  }
})

type IRootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useEqualSelector: TypedUseSelectorHook<IRootState> = payload => useSelector(payload, shallowEqual)
export const useAppDispatch: () => DispatchType = useDispatch

export { commonSlice, menuSlice }

export default store
