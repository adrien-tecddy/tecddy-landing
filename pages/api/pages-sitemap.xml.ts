import type { NextApiRequest, NextApiResponse } from "next";
import { CANONICAL_ORIGIN } from "src/constants/env";
import {
  PAGE_PATHS,
  PAGE_PATHS_GENERATION_TIMESTAMP,
} from "src/constants/staticPagePaths";
import sendSitemap from "src/functions/sendSitemap";

const urls = PAGE_PATHS.map((path) => ({
  loc: `${CANONICAL_ORIGIN}${path}`,
  lastmod: PAGE_PATHS_GENERATION_TIMESTAMP,
}));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  sendSitemap(res, urls);
}
