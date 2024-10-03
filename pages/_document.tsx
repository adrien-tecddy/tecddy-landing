import { Html, Head, Main, NextScript } from "next/document";

const NEXT_PUBLIC_ALLOW_INDEXING = Boolean(
  process.env.NEXT_PUBLIC_ALLOW_INDEXING,
);

export default function UnderscoreDocument() {
  return (
    <Html lang="en">
      <Head>
        {NEXT_PUBLIC_ALLOW_INDEXING ? null : (
          <meta name="robots" content="noindex,follow" />
        )}
      </Head>
      {/* <body data-prefers-color-scheme="light"> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
