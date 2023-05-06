export interface Meal {
  name: string;
  calories: number;
}

export interface MealEvent {
  local_date: string;
  timestamp: number;
  meal: Meal;
}
