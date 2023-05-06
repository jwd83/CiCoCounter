export interface Meal {
  name: string;
  calories: number;
}

export interface MealRecord {
  timestamp: number;
  meal: Meal;
}

export interface Data {
  isAllowed: boolean;
  name: string;
  meals: Meal[];
}
