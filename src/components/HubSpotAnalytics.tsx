import React, { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    _hsq?: unknown[][]
  }
}

interface HParams {
  accountId: string
}

export function HubSpotAnalytics(props: HParams) {
  useEffect(() => {
    // performance.mark is being used as a feature use signal. While it is traditionally used for performance
    // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
    // existing API.
    // The performance measurement will be handled by Chrome Aurora

    performance.mark('mark_feature_usage', {
      detail: {
        feature: 'hubspot-analytics',
      },
    })
  }, [])

  return (
    <>
      <Script
        id="hs-script-loader"
        async
        defer
        src={`//js.hs-scripts.com/${props.accountId}.js`}
      />
    </>
  )
}

export function trackPageView(path: string) {
  // eslint-disable-next-line no-multi-assign -- HACK: one liner
  const _hsq = (window._hsq = window._hsq || [])

  _hsq.push(['setPath', path])
  _hsq.push(['trackPageView'])
}

export function trackCustomBehavioralEvent(
  name: string,
  properties?: Record<string, string>,
) {
  // eslint-disable-next-line no-multi-assign -- HACK: one liner
  const _hsq = (window._hsq = window._hsq || [])

  _hsq.push([
    'trackCustomBehavioralEvent',
    {
      name,
      properties: properties || {},
    },
  ])
}

export function identify(email: string, properties?: Record<string, string>) {
  // eslint-disable-next-line no-multi-assign -- HACK: one liner
  const _hsq = (window._hsq = window._hsq || [])

  _hsq.push([
    'identify',
    {
      email,
      ...properties,
    },
  ])
}
