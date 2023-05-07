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
      class="bg-blue-200 rounded-xl pt-2 pb-2 border(blue-500 2)"
      style="width: 300px; text-align: center; margin:auto;"
    >
      <h3 class="text-2xl">{props.date}</h3>

      <div class="text-2xl mb-2">Calorie Summary</div>
      <div class="bg-blue-400">
        <div class="text-xl mb-1 pt-2">Today's Intake</div>
        <ul>
          {props.meals.map((meal) => (
            <li>
              {meal.name} - {meal.calories} calories
            </li>
          ))}
        </ul>
        <div class="text-xl mt-2 mb-2 pb-2">
          Total Intake: {total_intake} calories
        </div>
      </div>
      <div class="text-xl mb-1">Today's Exercise</div>
      <ul>
        {props.exercises.map((exercise) => (
          <li>
            {exercise.name} - {exercise.calories} calories
          </li>
        ))}
      </ul>
      <div class="text-xl mt-2">
        Total Exercises: {total_exercise} calories
      </div>
    </div>
  );
}
