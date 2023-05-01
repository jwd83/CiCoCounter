interface Meal {
  name: string;
  calories: number;
}

export function MealList(props: { meals: Meal[] }) {
  return (
    <div
      class="bg-green-200 rounded"
      style="width: 300px; text-align: center; margin:auto;"
    >
      <div class="text-2xl">Calorie Intake</div>
    </div>
  );
}
