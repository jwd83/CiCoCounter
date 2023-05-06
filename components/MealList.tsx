import { Meal } from "$app/utils/types.ts";

export function MealList(props: { meals: Meal[] }) {
  // solve the total calories today
  let total_calories = 0;
  for (let i = 0; i < props.meals.length; i++) {
    total_calories += props.meals[i].calories;
  }

  return (
    <div
      class="bg-green-200 rounded pt-2 pb-2"
      style="width: 300px; text-align: center; margin:auto;"
    >
      <div class="text-2xl mb-2">Calorie Intake</div>
      <ul>
        {props.meals.map((meal) => (
          <li>
            {meal.name} - {meal.calories} calories
          </li>
        ))}
      </ul>
      <div class="text-2xl mt-2">Total: {total_calories} calories</div>
    </div>
  );
}
