import Head from 'next/head'

import { TECDDY_TWITTER_ID } from 'src/constants/env'

interface MetaDescriptionProps {
  content: string
}

export default function MetaDescription({ content }: MetaDescriptionProps) {
  return (
    <Head>
      <meta key="description" name="description" content={content} />
      <meta key="og:description" property="og:description" content={content} />
      {TECDDY_TWITTER_ID ? (
        <meta
          key="twitter:description"
          name="twitter:description"
          content={content}
        />
      ) : null}
    </Head>
  )
}
