import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseBody {
  iosMinVersion: string;
  androidMinVersion: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>,
) {
  res.status(200).send({
    iosMinVersion: "1.0.0",
    androidMinVersion: "1.0.0",
  });
}
