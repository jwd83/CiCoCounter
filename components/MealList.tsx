import { Meal } from "$app/utils/types.ts";

export function MealList(props: { meals: Meal[] }) {
  // TODO: calculate a total number of calories consumed today

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
    </div>
  );
}
