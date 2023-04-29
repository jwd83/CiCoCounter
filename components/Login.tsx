export function Login() {
  return (
    <form method="post" action="/api/login">
      <h2 class="text-4xl mb-8">Login</h2>
      <div class="mb-2">
        🧑Username
        <input
          type="text"
          name="username"
          className="rounded ml-4 mr-4 bg-red-100 text-2xl"
        />
      </div>
      <div class="mb-4">
        🔑Password
        <input
          type="password"
          name="password"
          className="rounded ml-4 mr-4 bg-red-100 text-2xl"
        />
      </div>
      <div>
        <button
          type="submit"
          class="rounded hover:bg-blue-300 bg-blue-200 p-2 border(blue-500 2)"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
