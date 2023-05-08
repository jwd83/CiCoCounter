export function AddMealForm() {
  return (
    <form method="POST" action="/api/add_meal">
      <div
        class="bg-green-200 rounded-xl p-4 mt-4 mb-4 border(green-600 2)"
        style="width: 300px; text-align: center; margin-left:auto; margin-right:auto;"
      >
        <div class="text-2xl">🍉 Add Meal</div>
        <div>
          Meal Description
        </div>
        <input
          class="mt-2 mb-2 rounded border-4 p-1 text-center"
          type="text"
          name="name"
          placeholder="Meal Description"
        />
        <div>
          Calories Consumed
        </div>
        <input
          class="mt-2 mb-2 rounded border-4 p-1 text-center"
          type="text"
          name="calories"
          placeholder="500"
        />
        <div>
          <input
            type="submit"
            value="⛽ Add Meal"
            class="rounded hover:bg-blue-300 bg-blue-200 p-2 border(blue-500 2) mt-4 mb-2"
          />
        </div>
      </div>
    </form>
  );
}
