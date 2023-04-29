import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";

interface Data {
  isAllowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ isAllowed: cookies.auth === "bar" });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <div class="text-center">
      <h1 class="text-6xl mb-8">
        <a href="/">CiCoCounter</a>
      </h1>

      <div class="mb-4">
        You currently {data.isAllowed ? "are" : "are not"} logged in.
      </div>
      {!data.isAllowed
        ? <Login />
        : <a class="rounded bg-red-300 p-2" href="/logout">Logout</a>}
    </div>
  );
}

function Login() {
  return (
    <form method="post" action="/api/login">
      <h2 class="text-4xl mb-8">Login</h2>
      <div class="mb-2">
        User:
        <input
          type="text"
          name="username"
          className="rounded ml-4 bg-red-100 text-2xl"
        />
      </div>
      <div class="mb-4">
        Password:
        <input
          type="password"
          name="password"
          className="rounded ml-4 bg-red-100 text-2xl"
        />
      </div>
      <div>
        <button
          type="submit"
          class="rounded bg-red-300 p-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
