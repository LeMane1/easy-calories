import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from 'src/shared/api'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { searchReducer } from "src/features/search-products";
import { computedProductsReducer } from "src/widgets/burn-calculator";

const rootReducer = combineReducers({
  searchReducer,
  computedProductsReducer,
  [api.reducerPath]: api.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector