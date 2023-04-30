export function Login() {
  return (
    <form method="post" action="/api/login">
      <h2 class="text-4xl mb-8">Login</h2>
      <div class="mb-8">
        🔑 Account #
        <input
          type="password"
          name="password"
          class="rounded ml-4 mr-4 bg-red-100 text-2xl"
          autofocus
        />
      </div>
      <div>
        <button
          type="submit"
          class="rounded hover:bg-green-300 bg-green-200 p-2 border(green-500 2) m-2"
        >
          Login
        </button>
        or
        <a
          href="/api/signup"
          class="rounded hover:bg-blue-300 bg-blue-200 p-2 border(blue-500 2) m-2"
        >
          Sign Up
        </a>
      </div>
    </form>
  );
}
