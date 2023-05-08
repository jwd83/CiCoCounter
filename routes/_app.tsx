// https://fresh.deno.dev/docs/concepts/app-wrapper

import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <meta
          name="description"
          content="The anonymous Calorie In, Calorie Out Counter"
        />
        <title>
          CiCoCounter :: The anonymous Calorie In, Calorie Out Counter
        </title>
      </Head>
      <body class="text-center bg-gray-200">
        <h1 class="text-5xl mb-4 mt-2">
          <a href="/">⚖️CiCoCounter🏋️</a>
        </h1>
        <h2 class="text-xl mb-6 italic">
          The anonymous Calorie In, Calorie Out Counter
        </h2>

        <Component />

        <a href="https://fresh.deno.dev/">
          <img
            alt="Powered by Fresh"
            title="Powered by Fresh"
            src="https://fresh.deno.dev/fresh-badge.svg"
            class="m-auto mt-10"
            style="width: 175px; height: auto;"
          />
        </a>
        <a href="https://github.com/jwd83/cicocounter">
          <img
            alt="View source on GitHub"
            title="View source on GitHub"
            src="/github-mark.png"
            class="m-auto mt-4"
            style="width: 50px; height: auto;"
          />
        </a>
      </body>
    </html>
  );
}
