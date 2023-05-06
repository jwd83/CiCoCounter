export function todaysDate() {
  const _now = Date.now();
  const _local_date = new Date(_now).toISOString().split("T")[0];
  return _local_date;
}
