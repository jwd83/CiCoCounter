import { Exercise, Meal } from "$app/utils/types.ts";

export function CalorieSummary(
  props: { meals: Meal[]; exercises: Exercise[]; date: string },
) {
  // solve the total calories consumed today
  let total_intake = 0;
  for (let i = 0; i < props.meals.length; i++) {
    total_intake += props.meals[i].calories;
  }

  // solve the total bonus calories burned today
  let total_exercise = 0;
  for (let i = 0; i < props.exercises.length; i++) {
    total_exercise += props.exercises[i].calories;
  }

  return (
    <div
      class="bg-blue-200 rounded-xl pt-2 pb-1 border(blue-500 2)"
      style="width: 350px; text-align: center; margin:auto;"
    >
      <div class="text-2xl">Calorie Summary</div>
      <h4 class="text-2xl mb-2">⏮️{props.date}⏭️</h4>

      <div class="bg-blue-400">
        <div class="text-xl mb-1 pt-2">
          Today's Intake:{" "}
          <span class="font-black">{total_intake} calories</span>
        </div>
        <ul class="pb-2">
          {props.meals.map((meal) => (
            <li>
              {meal.name} - {meal.calories} calories
            </li>
          ))}
        </ul>
      </div>
      <div class="text-xl mb-1 pt-2">
        Today's Exercise{" "}
        <span class="font-black">{total_exercise} calories</span>
      </div>
      <ul class="pb-2">
        {props.exercises.map((exercise) => (
          <li>
            {exercise.name} - {exercise.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
}
