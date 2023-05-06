export function TodaysStats(props: { name: string; date: string }) {
  return (
    <div class="text-2xl">
      <h1 class="text-3xl mb-2">User {props.name}</h1>
      <h3>Your Day of {props.date}</h3>
    </div>
  );
}
