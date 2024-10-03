import { sendGAEvent } from 'src/tecddy-next/google'

import DefaultPageLayout from 'src/components/DefaultPageLayout'
import MetaTitle from '../meta/MetaTitle'
import { useEffect, useRef } from 'react'
import Head from 'next/head'

function trackRedirectOutlookBookDiscoveryCallWithTecddy(bookingId: string) {
  const redirect = () => {
    window.location.href = `https://outlook.office365.com/book/${bookingId}/`
  }

  const timeout = setTimeout(() => {
    redirect()
  }, 2500)

  sendGAEvent('event', 'redirectOutlookBook', {
    outlook_booking_id: bookingId,
    event_callback: () => {
      clearTimeout(timeout)
      redirect()
    },
    event_timeout: 2000,
  })
}

interface Props {
  bookingId: string
}

export default function RedirectOutlookBookPage({ bookingId }: Props) {
  const ref = useRef<number>(0)

  useEffect(() => {
    if (ref.current === 0) {
      trackRedirectOutlookBookDiscoveryCallWithTecddy(bookingId)
    }
    ref.current += 1
  }, [bookingId])

  return (
    <DefaultPageLayout>
      <Head>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <MetaTitle content="Redirecting to Outlook... - Tecddy" />
      <h1>Redirecting to Outlook...</h1>
    </DefaultPageLayout>
  )
}
