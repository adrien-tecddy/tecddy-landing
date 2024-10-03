import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
} from 'next/types'
import BusinessCardsPage, {
  BusinessCard,
} from 'src/components/BusinessCardsPage'

const CARDS: Record<string, BusinessCard> = {
  reicolee: {
    displayName: 'Reico Lee',
    jobTitle: 'Co-Founder & CEO',
  },
  adrienatzert: {
    displayName: 'Adrien Atzert',
    jobTitle: 'Co-Founder & CTO',
  },
  esmeechik: {
    displayName: 'Esmee Chik',
    jobTitle: 'Operations Manager',
  },
}

interface Props {
  card: BusinessCard
}

// eslint-disable-next-line @typescript-eslint/require-await -- GetServerSideProps require async
export const getServerSideProps = (async (ctx) => {
  const slug = ctx.params?.slug

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    }
  }

  const card = CARDS[slug]

  if (!card) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      card,
    },
  }
}) satisfies GetServerSideProps<Props>

export default function PagesBusinessCardsSlugPage({
  card,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <BusinessCardsPage card={card} />
}
