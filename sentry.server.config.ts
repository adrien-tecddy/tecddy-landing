// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://837b821e718a43a932ee1b096c7c6be2@o4507615219679232.ingest.de.sentry.io/4507616131350608",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  release:
    process.env.NEXT_PUBLIC_BUILD_WORKSPACE && process.env.NEXT_PUBLIC_BUILD_TAG
      ? `${process.env.NEXT_PUBLIC_BUILD_WORKSPACE}.${process.env.NEXT_PUBLIC_BUILD_TAG}`
      : undefined,
  environment: process.env.NEXT_PUBLIC_BUILD_STAGE || "sandbox",

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
});
