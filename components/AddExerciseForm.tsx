export function AddExerciseForm() {
  return (
    <>
      <form method="POST" action="/api/add_exercise">
        <div
          class="bg-red-200 rounded p-4 mt-4 mb-4"
          style="width: 300px; text-align: center; margin-left:auto; margin-right:auto;"
        >
          <div class="text-2xl">Add Exercise</div>
          <div>
            Workout Description
          </div>
          <input
            class="mt-2 mb-2 rounded"
            type="text"
            name="name"
            placeholder="Workout Description"
          />
          <div>
            Calories Burned
          </div>
          <input
            class="mt-2 mb-2 rounded"
            type="text"
            name="calories"
            placeholder="Calories Burned"
          />
          <div>
            <input
              type="submit"
              value="🍉 Add Meal"
              class="rounded hover:bg-blue-300 bg-blue-200 p-2 border(blue-500 2) mt-4 mb-2"
            />
          </div>
        </div>
      </form>
    </>
  );
}
