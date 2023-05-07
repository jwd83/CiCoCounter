import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
// load components we need
import { AddMealForm } from "../components/AddMealForm.tsx";
import { Login } from "../components/Login.tsx";
import { Logout } from "../components/Logout.tsx";
import { EditProfile } from "../components/EditProfile.tsx";
import { CalorieSummary } from "../components/CalorieSummary.tsx";
import { TodaysStats } from "../components/TodaysStats.tsx";
import { Data, Exercise, Meal } from "$app/utils/types.ts";
import { loadExercises, loadMeals } from "$app/utils/db.ts";
import { todaysDate } from "$app/utils/date.ts";
import { AddExerciseForm } from "../components/AddExerciseForm.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const cookies = getCookies(req.headers);
    let meals: Meal[] = [];
    let exercises: Exercise[] = [];
    // if the user is logged in (has a cookie), load their meals
    if (cookies.auth !== undefined) {
      const _local_date = todaysDate();
      meals = await loadMeals(cookies.auth, _local_date);
      console.log(meals);
      exercises = await loadExercises(cookies.auth, _local_date);
      console.log(exercises);
    }
    console.log(cookies);
    return ctx.render!({
      isAllowed: cookies.auth !== undefined,
      name: cookies.auth || "anonymous",
      meals: meals,
      exercises: exercises,
    });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <>
      {!data.isAllowed ? <Login /> : (
        <>
          <TodaysStats name={data.name} />
          <CalorieSummary
            meals={data.meals}
            exercises={data.exercises}
            date={todaysDate()}
          />
          <AddMealForm />
          <AddExerciseForm />
          <div class="p-4">
            <EditProfile />
            <Logout />
          </div>
        </>
      )}
    </>
  );
}
