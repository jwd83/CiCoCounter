export function TodaysStats(props: { name: string }) {
  return (
    <div>
      <h3 class="text-3xl m">
        Welcome home user,
      </h3>
      <h3 class="text-3xl mb-2">{props.name}</h3>
    </div>
  );
}
