import { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleAnalytics, GoogleTagManager } from 'src/tecddy-next/google'

import favicon from 'src/images/favicon.ico'
import ogImage from 'src/images/DefaultOpenGraph.png'
import MetaDescription from 'src/components/meta/MetaDescription'
import IconSvg144 from 'src/images/Icon-144.svg?url'

import { TECDDY_TWITTER_ID } from 'src/constants/env'

import './style.scss'
import MetaTitle from 'src/components/meta/MetaTitle'
import {
  META_DESCRIPTION,
  META_LOCALE,
  META_NAME,
  META_THEME_COLOR,
  META_TITLE,
} from 'src/constants/meta'
import { HubSpotAnalytics } from 'src/components/HubSpotAnalytics'

// eslint-disable-next-line no-console -- NOTE: Log NEXT_PUBLIC_BUILD_WORKSPACE
console.info(
  `NEXT_PUBLIC_BUILD_WORKSPACE: ${process.env.NEXT_PUBLIC_BUILD_WORKSPACE}`,
)
// eslint-disable-next-line no-console -- NOTE: Log NEXT_PUBLIC_BUILD_TAG
console.info(`NEXT_PUBLIC_BUILD_TAG: ${process.env.NEXT_PUBLIC_BUILD_TAG}`)
// eslint-disable-next-line no-console -- NOTE: Log NEXT_PUBLIC_BUILD_STAGE
console.info(`NEXT_PUBLIC_BUILD_STAGE: ${process.env.NEXT_PUBLIC_BUILD_STAGE}`)

export default function UnderscoreApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaTitle content={META_TITLE} />
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href={favicon.src} />
        <link rel="icon" type="image/svg+xml" href={IconSvg144} sizes="any" />
        <meta name="theme-color" content={META_THEME_COLOR} />

        {TECDDY_TWITTER_ID ? (
          <>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={`@${TECDDY_TWITTER_ID}`} />
            <meta name="twitter:image" content={ogImage.src} />
            <meta name="twitter:image:src" content={ogImage.src} />
            <meta name="twitter:image:width" content={`${ogImage.width}`} />
            <meta name="twitter:image:height" content={`${ogImage.height}`} />
          </>
        ) : null}

        <meta property="og:image" content={ogImage.src} />
        <meta property="og:image:secure_url" content={ogImage.src} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content={`${ogImage.width}`} />
        <meta property="og:image:height" content={`${ogImage.height}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={META_NAME} />
        <meta property="og:locale" content={META_LOCALE} />
      </Head>
      <MetaDescription content={META_DESCRIPTION} />
      <Component {...pageProps} />
      {process.env.NEXT_PUBLIC_HUBSPOT_ID?.match(/[0-9]+/g) ? (
        <HubSpotAnalytics accountId={process.env.NEXT_PUBLIC_HUBSPOT_ID} />
      ) : null}
      {process.env.NEXT_PUBLIC_GA_ID?.startsWith('G-') ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      ) : null}
      {process.env.NEXT_PUBLIC_GTM_ID?.startsWith('GTM-') ? (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      ) : null}
    </>
  )
}
