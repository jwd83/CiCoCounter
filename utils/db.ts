import type { Meal, MealEvent } from "$app/utils/types.ts";

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
  console.log(`result = ${result}`);
  return result;
}

export async function loadMeals(user_id: string, local_date: string) {
}
// export async function StoreMeal(
//   user_id: string,
//   name: string,
//   calories: number,
// ) {
//   const kv = await Deno.openKv();
//   const timestamp = Date.now().toString();
// }
