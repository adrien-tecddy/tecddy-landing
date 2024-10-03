import DefaultPageLayout from 'src/components/DefaultPageLayout'

import SectionTitle from 'src/components/SectionTitle'
import MetaTitle from '../meta/MetaTitle'
import Head from 'next/head'

export interface BusinessCard {
  displayName: string
  jobTitle: string
}

interface Props {
  card: BusinessCard
}

export default function BusinessCardsPage({ card }: Props) {
  const { displayName, jobTitle } = card
  return (
    <DefaultPageLayout>
      <Head>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <MetaTitle content={`${displayName} - Tecddy`} />
      <SectionTitle variant="hero" title={displayName} description={jobTitle} />
    </DefaultPageLayout>
  )
}
