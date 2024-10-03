import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseBody {
  stats: "live";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>,
) {
  res.status(200).send({
    stats: "live",
  });
}
