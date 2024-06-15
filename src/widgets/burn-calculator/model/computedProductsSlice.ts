import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IComputedProduct {
  name: string;
  caloriesPerDefaultWeight: number;
  defaultWeight: number;
  currentWeight: number;
  currentCalories: number;
}

interface ComputedProductsState {
  products: IComputedProduct[],
}

const initialState: ComputedProductsState = {
  products: []
}

const computedProductsSlice = createSlice({
  name: 'computedProducts',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IComputedProduct>) => {
      const existedProduct: IComputedProduct | undefined = state.products.find(product => product.name === action.payload.name)
      if (!existedProduct) {
        state.products.push(action.payload)
      }
    },
    changeProductWeight: (state, action: PayloadAction<{ name: string; weight: number }>) => {
      const changedProduct = state.products.find(product => product.name === action.payload.name)
      if (changedProduct) {
        changedProduct.currentWeight = action.payload.weight
        changedProduct.currentCalories = (changedProduct.currentWeight * changedProduct.caloriesPerDefaultWeight) / changedProduct.defaultWeight
      }
    },
    removeProducts: (state) => {
      state.products = []
    },
  }
})

export const { addProduct, changeProductWeight, removeProducts } = computedProductsSlice.actions
export default computedProductsSlice.reducer