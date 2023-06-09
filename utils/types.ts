export interface Meal {
  name: string;
  calories: number;
}

export interface Exercise {
  name: string;
  calories: number;
}

export interface MealRecord {
  timestamp: number;
  meal: Meal;
}

export interface Profile {
  sex: string;
  height: number;
  weight: number;
  age: number;
  tdee: number;
}

export interface Data {
  isAllowed: boolean;
  name: string;
  meals: Meal[];
  exercises: Exercise[];
}
