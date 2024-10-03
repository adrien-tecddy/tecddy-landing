import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseBody {
  applinks: {
    apps: any[]
    details: any[]
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>,
) {
  res.status(200).send({
    applinks: {
      apps: [],
      details: [
        // {
        //     "appID": "9JA89QQLNQ.com.apple.wwdc",
        //     "paths": [ "/wwdc/news/", "/videos/wwdc/2015/*"]
        // },
        // {
        //     "appID": "ABCD1234.com.apple.wwdc",
        //     "paths": [ "*" ]
        // }
      ],
    },
  })
}
