export function TodaysStats(props: { name: string; date: string }) {
  return (
    <div class="text-2xl">
      <h1 class="text-3xl">{props.name}</h1>
      <div>{Date.now()}</div>
      <h3>{props.date}</h3>
    </div>
  );
}
