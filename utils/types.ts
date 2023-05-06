export interface Meal {
  name: string;
  calories: number;
}

export interface MealEvent {
  user_id: string;
  local_date: string;
  timestamp: string;
  meal: Meal;
}
