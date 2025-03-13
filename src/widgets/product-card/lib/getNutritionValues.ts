import { IProduct } from 'src/shared/api';
import type { INutritionListItem } from '../models/types';

export const getNutritionValues = (product: IProduct): INutritionListItem[] => {
  return [
    {
      title: 'Carbohydrates', // Углеводы
      value: product.carbohydrates_total_g,
      weightUnit: 'g',
      dangerLimit: 50, // Более 50 г углеводов в 100 г продукта → опасно (высокий гликемический индекс)
      excessDescription: 'High carbohydrate intake can lead to weight gain and increased blood sugar levels.'
    },
    {
      title: 'Cholesterol', // Холестерин
      value: product.cholesterol_mg,
      weightUnit: 'mg',
      dangerLimit: 300, // Более 300 мг холестерина в день → повышенный риск сердечно-сосудистых заболеваний
      excessDescription: 'Excess cholesterol can increase the risk of heart disease and stroke.'
    },
    {
      title: 'Saturated fat', // Насыщенные жиры
      value: product.fat_saturated_g,
      weightUnit: 'g',
      dangerLimit: 10, // Более 10 г насыщенных жиров в 100 г → повышенный уровень холестерина в крови
      excessDescription: 'High saturated fat intake increases bad cholesterol levels (LDL) and risk of heart disease.'
    },
    {
      title: 'Total fat', // Общие жиры
      value: product.fat_total_g,
      weightUnit: 'g',
      dangerLimit: 30, // Более 30 г жиров в 100 г → риск ожирения и проблем с сердцем
      excessDescription: 'Excess fat intake can lead to weight gain and cardiovascular problems.'
    },
    {
      title: 'Fiber content', // Клетчатка
      value: product.fiber_g,
      weightUnit: 'g',
      dangerLimit: 10, // Более 10 г клетчатки в 100 г → риск расстройства пищеварения
      excessDescription: 'Too much fiber can cause bloating and digestive issues.'
    },
    {
      title: 'Potassium', // Калий
      value: product.potassium_mg,
      weightUnit: 'mg',
      dangerLimit: 3500, // Более 3500 мг калия в день → риск гиперкалиемии
      excessDescription: 'High potassium intake can cause heart arrhythmias and muscle weakness.'
    },
    {
      title: 'Protein', // Белок
      value: product.protein_g,
      weightUnit: 'g',
      dangerLimit: 30, // Более 30 г белка в 100 г → нагрузка на почки
      excessDescription: 'Excessive protein intake can stress the kidneys and cause dehydration.'
    },
    {
      title: 'Sodium', // Натрий (соль)
      value: product.sodium_mg,
      weightUnit: 'mg',
      dangerLimit: 400, // Более 400 мг натрия в 100 г → повышенный риск гипертонии
      excessDescription: 'High sodium intake increases the risk of high blood pressure and stroke.'
    },
    {
      title: 'Sugar', // Сахар
      value: product.sugar_g,
      weightUnit: 'g',
      dangerLimit: 10, // Более 10 г сахара в 100 г → риск ожирения и диабета
      excessDescription: 'High sugar intake can cause weight gain, diabetes, and heart problems.'
    }
  ]
}