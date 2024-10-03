import Head from 'next/head'

interface Props {
  content: string[]
}

export default function MetaKeywords({ content }: Props) {
  return (
    <Head>
      <meta key="keywords" name="keywords" content={content.join(',')} />
    </Head>
  )
}
