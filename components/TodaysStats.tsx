export function TodaysStats(props: { name: string }) {
  return (
    <div>
      <h1 class="text-3xl m">
        Welcome home user,
      </h1>
      <h1 class="text-3xl mb-2">{props.name}</h1>
    </div>
  );
}
