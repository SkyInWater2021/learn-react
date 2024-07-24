import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { menuApiTypes } from "@/services/api-menu"

export interface CommonState {
  observationMenus?: menuApiTypes.MenuFactor[]
}

const initialState: CommonState = {
  observationMenus: []
}

const slice = createSlice({
  name: "appAppMenusSlice",
  initialState,
  reducers: {
    observationMenusAction(state, { payload }: PayloadAction<menuApiTypes.MenuFactor[]>) {
      state.observationMenus = payload
    }
  }
})
export const { observationMenusAction } = slice.actions

export const reducer = slice.reducer
