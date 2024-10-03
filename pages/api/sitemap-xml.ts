import type { NextApiRequest, NextApiResponse } from "next";
import { CANONICAL_ORIGIN } from "src/constants/env";
import { PAGE_PATHS_GENERATION_TIMESTAMP } from "src/constants/staticPagePaths";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.status(200).setHeader("Content-Type", "application/xml");

  const sitemaps = [
    {
      loc: `${CANONICAL_ORIGIN}/api/pages-sitemap.xml`,
      lastmod: PAGE_PATHS_GENERATION_TIMESTAMP,
    },
  ];

  res.write(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`,
  );

  for (const sitemap of sitemaps) {
    res.write(
      `<sitemap><loc>${sitemap.loc}</loc><lastmod>${sitemap.lastmod}</lastmod></sitemap>\n`,
    );
  }

  res.write(`</sitemapindex>\n`);
  res.end();
}
