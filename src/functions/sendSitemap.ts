import { NextApiResponse } from 'next'

type Urls = {
  loc: string
  lastmod: string
}[]

export default function sendSitemap(res: NextApiResponse<string>, urls: Urls) {
  res.status(200).setHeader('Content-Type', 'application/xml')

  res.write(`<?xml version="1.0" encoding="UTF-8"?>\n`)
  res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`)

  for (const url of urls) {
    res.write(
      `<url><loc>${url.loc}</loc><lastmod>${url.lastmod}</lastmod></url>\n`,
    )
  }

  res.write(`</urlset>\n`)
  res.end()
}
