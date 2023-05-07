export function TodaysStats(props: { name: string; date: string }) {
  return (
    <div>
      <h1 class="text-3xl m">
        Welcome home user,
      </h1>
      <h1 class="text-3xl mb-2">{props.name}</h1>
      <h3 class="text-2xl">Your Day of {props.date}</h3>
    </div>
  );
}
