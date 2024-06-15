import { useAppSelector } from "src/app";
import type { CaloriesSum } from '../model/types'

export const useGetCaloriesSum = (): CaloriesSum => {
  const { products } = useAppSelector(state => state.computedProductsReducer)
  if (products) {
    const caloriesSum: number = products.reduce((acc, product) => acc += product.currentCalories, 0)
    return {
      value: caloriesSum > 1000000 ? '1000000' : Math.round(caloriesSum).toString(),
      isOverflowed: caloriesSum > 1000000
    }
  } else {
    return {
      value: '0',
      isOverflowed: false
    }
  }
}