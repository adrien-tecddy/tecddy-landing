import type { NextApiRequest, NextApiResponse } from "next";

import { CANONICAL_ORIGIN } from "src/constants/env";

const NEXT_PUBLIC_ALLOW_INDEXING = Boolean(
  process.env.NEXT_PUBLIC_ALLOW_INDEXING,
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.status(200).setHeader("Content-Type", "text/plain");

  if (NEXT_PUBLIC_ALLOW_INDEXING) {
    res.send(["User-agent: *", "Disallow:"].join("\n"));
    return;
  }

  res.send(
    [
      "User-agent: *",
      "Disallow: /",
      "",
      `Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`,
    ].join("\n"),
  );
}
