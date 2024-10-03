// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://837b821e718a43a932ee1b096c7c6be2@o4507615219679232.ingest.de.sentry.io/4507616131350608",

  release:
    process.env.NEXT_PUBLIC_BUILD_WORKSPACE && process.env.NEXT_PUBLIC_BUILD_TAG
      ? `${process.env.NEXT_PUBLIC_BUILD_WORKSPACE}.${process.env.NEXT_PUBLIC_BUILD_TAG}`
      : undefined,
  environment: process.env.NEXT_PUBLIC_BUILD_STAGE || "sandbox",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
