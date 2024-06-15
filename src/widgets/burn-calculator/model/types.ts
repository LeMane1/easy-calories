export interface IActivity {
  title: string;
  image: string;
  caloriesPerMinuteConsumption: number;
}

export interface CaloriesSum {
  value: string;
  isOverflowed: boolean;
}