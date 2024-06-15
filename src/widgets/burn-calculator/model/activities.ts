import Walk from '../assets/walk.png'
import Gym from '../assets/dumbbell.png'
import Jogging from '../assets/jogging.png'
import Swimming from '../assets/swimming.png'
import Yoga from '../assets/yoga.png'
import type { IActivity } from './types';

export const activities: IActivity[] = [
  {
    title: 'Brisk walk',
    image: Walk,
    caloriesPerMinuteConsumption: 7
  },
  {
    title: 'Jogging',
    image: Jogging,
    caloriesPerMinuteConsumption: 13.95
  },
  {
    title: 'Gym',
    image: Gym,
    caloriesPerMinuteConsumption: 5.9
  },
  {
    title: 'Swimming',
    image: Swimming,
    caloriesPerMinuteConsumption: 8.3
  },
  {
    title: 'Power yoga',
    image: Yoga,
    caloriesPerMinuteConsumption: 6.03
  }
]