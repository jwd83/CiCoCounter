// https://fresh.deno.dev/docs/concepts/app-wrapper

import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <title>CiCoCounter :: A Calorie Counter</title>
        <link rel="stylesheet" href={asset("style.css")} />
      </Head>
      <body class="text-center">
        <h1 class="text-6xl mb-8">
          <a href="/">CiCoCounter</a>
        </h1>
        <Component />
      </body>
    </html>
  );
}
