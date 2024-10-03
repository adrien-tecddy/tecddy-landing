import { MetadataRoute } from "next";
import type { NextApiRequest, NextApiResponse } from "next";

import IconPng144 from "src/images/Icon-144.png";
import Favicon from "src/images/favicon.ico";
import IconSvg144 from "src/images/Icon-144.svg?url";

import {
  META_DESCRIPTION,
  META_NAME,
  META_THEME_COLOR,
  META_BACKGROUND_COLOR,
} from "src/constants/meta";

function buildManifest(): MetadataRoute.Manifest {
  return {
    name: META_NAME,
    short_name: META_NAME,
    description: META_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: META_BACKGROUND_COLOR,
    theme_color: META_THEME_COLOR,
    icons: [
      {
        src: Favicon.src,
        sizes: `${Favicon.width}x${Favicon.height}`,
        type: "image/x-icon",
      },
      {
        src: IconPng144.src,
        type: "image/png",
        sizes: `${IconPng144.width}x${IconPng144.height}`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/_next/${IconSvg144}`,
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.status(200).setHeader("Content-Type", "application/json");

  res.send(JSON.stringify(buildManifest()));
}
