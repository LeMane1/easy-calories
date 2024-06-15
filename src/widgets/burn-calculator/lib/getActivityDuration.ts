export const getActivityDuration = (value: string, consumption: number): number => {
  return Math.round(Number(value) / consumption)
}