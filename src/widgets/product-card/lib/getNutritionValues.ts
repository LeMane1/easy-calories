import { IProduct } from 'src/shared/api';
import type { INutritionListItem } from '../models/types';

export const getNutritionValues = (product: IProduct): INutritionListItem[] => {
  return [
    {
      title: 'Carbohydrates',
      value: product.carbohydrates_total_g,
      weightUnit: 'g',
      dangerLimit: 20,
      excessDescription: 'Test'
    },
    {
      title: 'Cholesterol',
      value: product.cholesterol_mg,
      weightUnit: 'mg',
      dangerLimit: 20,
      excessDescription: 'Test'
    },
    {
      title: 'Saturated fat',
      value: product.fat_saturated_g,
      weightUnit: 'g',
      dangerLimit: 20,
      excessDescription: 'Test'
    },
    {
      title: 'Total fat',
      value: product.fat_total_g,
      weightUnit: 'g',
      dangerLimit: 20,
      excessDescription: 'Test'
    },
    {
      title: 'Fiber content',
      value: product.fiber_g,
      weightUnit: 'g',
      dangerLimit: 20,
      excessDescription: 'Test'
    },
    {
      title: 'Potassium',
      value: product.potassium_mg,
      weightUnit: 'mg',
      dangerLimit: 20,
      excessDescription: 'Test'
    },
    {
      title: 'Protein',
      value: product.protein_g,
      weightUnit: 'g',
      dangerLimit: 20,
      excessDescription: 'Test'
    },
    {
      title: 'Sodium',
      value: product.sodium_mg,
      weightUnit: 'mg',
      dangerLimit: 20,
      excessDescription: 'Test'
    },
    {
      title: 'Sugar',
      value: product.sugar_g,
      weightUnit: 'g',
      dangerLimit: 20,
      excessDescription: 'Test'
    }
  ]
}