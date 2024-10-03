import Head from 'next/head'

import { TECDDY_TWITTER_ID } from 'src/constants/env'

interface Props {
  content: string
}

export default function MetaTitle({ content }: Props) {
  return (
    <Head>
      <title key="title">{content}</title>
      <meta key="og:title" property="og:title" content={content} />
      {TECDDY_TWITTER_ID ? (
        <meta key="twitter:title" name="twitter:title" content={content} />
      ) : null}
    </Head>
  )
}
