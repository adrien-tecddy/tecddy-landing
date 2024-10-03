import Link from 'next/link'
import { useCallback } from 'react'
import { sendGAEvent } from 'src/tecddy-next/google'

import DefaultPageLayout from 'src/components/DefaultPageLayout'
import Button from 'src/components/Button'
import SectionTitle from 'src/components/SectionTitle'

import scss from './style.module.scss'
import MetaTitle from '../meta/MetaTitle'

export default function WelcomeToTecddyPage() {
  const onClick = useCallback(() => {
    sendGAEvent('event', 'clickOutlookBookDiscoveryCallWithTecddy')
    window.open(
      'https://outlook.office365.com/book/DiscoverycallwTecddy@tecddy.com/',
    )
  }, [])

  return (
    <DefaultPageLayout>
      <MetaTitle content="Welcome to Tecddy - Tecddy" />
      <SectionTitle
        variant="hero"
        title={
          <>
            Welcome to <strong>Tecddy</strong>
          </>
        }
        subtitle={
          <>
            We built Tecddy with the goal to help Hong Kong startups and SME
            like yours to succeed, and grow with you. For us that means creating
            a community for you to tell your stories, so you can begin
            attracting the right audience: clients, investors, candidates, etc.
            to help you build and scale your business with confidence.
          </>
        }
      />

      <div className={scss.Paragraph}>
        <strong>Company branding page</strong>
        <br />
        <br />
        We would be very honored to have you to be one of the first companies on
        our platform. All you need to do is upload the logo and some information
        about your company.
        <br />
        <Link href="https://forms.office.com/r/dESx8xt1N0">
          Set up your company branding page
        </Link>
        <br />
        <Link href="/companies">Explore companies</Link>
      </div>
      <br />
      <br />
      <div className={scss.Paragraph}>
        <strong>Create a free job ad with us</strong>
        <br />
        <br />
        If you are hiring for a full-time/contractor/intern, such as software
        developers, create a free job ad with us, it comes with an AI-powered
        assessment that automatically rank candidates based on their skills, and
        we offer on-demand technical interview service.
      </div>

      <div className={scss.Paragraph}>
        Please don’t hesitate to book a time with me if you need help on:
        <ul style={{ listStyleType: 'disc' }}>
          <li>
            hiring someone technical, your first software engineer, or interns
          </li>
          <li>learn more about Tecddy</li>
          <li>provide feedback</li>
        </ul>
        <br />
        <Button compact onClick={onClick}>
          Talk to us
        </Button>
      </div>
    </DefaultPageLayout>
  )
}
