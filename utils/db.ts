export async function StoreMeal(
  user_id: string,
  name: string,
  calories: number,
) {
  const kv = await Deno.openKv();
  const timestamp = Date.now().toString();
}
