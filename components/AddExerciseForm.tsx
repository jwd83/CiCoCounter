export function AddExerciseForm() {
  return (
    <form method="POST" action="/api/add_exercise">
      <div
        class="bg-red-200 rounded-xl p-4 mt-4 mb-4 border(red-600 2) "
        style="width: 350px; text-align: center; margin-left:auto; margin-right:auto;"
      >
        <div class="text-2xl">🏋️ Add Exercise</div>
        <div>
          Exercise Description
        </div>
        <input
          class="mt-2 mb-2 rounded border-4 p-1 text-center"
          style="width: 300px;"
          type="text"
          name="name"
          placeholder="Workout Description"
        />
        <div>
          Calories Burned
        </div>
        <input
          class="mt-2 mb-2 rounded border-4 p-1 text-center"
          style="width: 300px;"
          type="text"
          name="calories"
          placeholder="200"
        />
        <div>
          <input
            type="submit"
            value="🔥 Add Exercise"
            class="rounded hover:bg-blue-300 bg-blue-200 p-2 border(blue-500 2) mt-4 mb-2"
          />
        </div>
      </div>
    </form>
  );
}
