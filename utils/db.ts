import type { Meal } from "$app/utils/types.ts";

const kv = await Deno.openKv();

export async function saveMeal(meal: Meal, user_id: string) {
  // store and format the current time
  const _now = Date.now();
  const _timestamp = _now / 1000;
  const _local_date = new Date(_now).toISOString().split("T")[0];

  // create our key to store the data
  const key = ["meals", user_id, _local_date, _timestamp];
  console.log(`key = ${key.toString()}, value = ${JSON.stringify(meal)}`);
  const result = await kv.set(key, meal);
  console.log(`result = ${JSON.stringify(result)}`);
  return result;
}

export async function loadMeals(user_id: string, local_date: string) {
  // create the root key to iterate over
  const root_key = ["meals", user_id, local_date];
  let meals: Meal[] = [];

  // console.log(`root_key = ${root_key.toString()}`);

  const meal_entries = kv.list({ prefix: root_key });

  for await (const meal_entry of meal_entries) {
    const _meal = meal_entry.value as Meal;
    meals.push(_meal);
  }

  return meals;
}
