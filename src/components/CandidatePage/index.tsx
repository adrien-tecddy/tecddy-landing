import DefaultPageLayout from 'src/components/DefaultPageLayout'

import GridCards from 'src/components/GridCards'
import NumberTimeline from 'src/components/NumberTimeline'
import SectionTitle from 'src/components/SectionTitle'
import { AnchorButton, LinkButton } from '../Button'

import JobApplyIcon from 'src/icons/JobApply-100.svg?component'
import JobMatchIcon from 'src/icons/JobMatch-100.svg?component'
import WatchIcon from 'src/icons/Watch-100.svg?component'
import CompeteIcon from 'src/icons/Compete-100.svg?component'
import ManageIcon from 'src/icons/Manage-100.svg?component'
import HandshakeIcon from 'src/icons/Handshake-100.svg?component'

import MetaDescription from '../meta/MetaDescription'
import MetaTitle from '../meta/MetaTitle'
import MetaKeywords from '../meta/MetaKeywords'
import ButtonsSection from '../ButtonsSection'

export default function CandidatePage() {
  return (
    <DefaultPageLayout>
      <MetaTitle content="Find IT jobs in Hong Kong with Tecddy" />
      <MetaDescription content="Tecddy simplifies finding your IT job in Hong Kong. Our AI platform connects you with IT career opportunities, matching your skills with the right job openings." />
      <MetaKeywords content={['Find job', 'IT career', 'Resume']} />
      <SectionTitle
        variant="hero"
        title={
          <>
            Get Noticed
            <br /> and
            <br /> Secure Your IT Career Dream
            <br /> with <strong>Tecddy</strong>
          </>
        }
        subtitle="Accelerate your ideal IT career with our resume centralized platform."
        description={
          <>
            Get personalized job matches, apply seamlessly, and receive quicker
            responses from employers. Gain a competitive edge with our technical
            assessments and interviews, and receive personal support from our
            talent partners. Join us today and discover your IT jobs.
          </>
        }
        action={
          <>
            <LinkButton variant="outline" href="/">
              Hire Talents
            </LinkButton>
          </>
        }
      />

      <SectionTitle
        title="What we do"
        subtitle={
          <>Don&apos;t Get Lost in the Crowd—Start IT career with Tecddy</>
        }
        description={
          <>
            Our AI-powered platform ensures your resume reaches the right
            employers quickly, speeding up your IT career journey with faster
            responses.
          </>
        }
      />
      <GridCards items={CARDS} />

      <ButtonsSection>
        <AnchorButton href={`mailto:hi@tecddy.com`}>Contact Us</AnchorButton>
      </ButtonsSection>

      <SectionTitle title="How it Works" />
      <NumberTimeline items={STEPS} />

      <ButtonsSection>
        <LinkButton href={'/companies'}>Discover More</LinkButton>
      </ButtonsSection>
    </DefaultPageLayout>
  )
}

const CARDS = [
  {
    icon: JobApplyIcon,
    title: `AI-Powered Job Matches`,
    content: `Discover IT job opportunities that align with your IT career goals. Our advanced AI matching algorithm analyses your resume to provide personalized IT job recommendations.`,
  },
  {
    icon: JobMatchIcon,
    title: `Effortless Applications`,
    content: `Say goodbye to tedious application processes. With us, applying for IT jobs is fast and simple—submit your resume in just a few clicks.`,
  },
  {
    icon: ManageIcon,
    title: `Centralized Profile Management`,
    content: `No need to upload multiple versions of your resume. Simply update your profile in one centralized place, ensuring it reaches employers quickly for the best IT job opportunities.`,
  },
  {
    icon: WatchIcon,
    title: `Faster Response Times`,
    content: `Our AI-powered platform speeds up the hiring process, cutting down the wait time for IT job responses. Get ready to hear back sooner and advance your IT career faster.`,
  },
  {
    icon: CompeteIcon,
    title: `Gain a Competitive Edge`,
    content: `Stand out in the competitive IT job market with our technical assessments and interview preparation. Impress employers and boost your chances of landing your dream IT job.`,
  },
  {
    icon: HandshakeIcon,
    title: `Personal Support`,
    content: `Receive personalized support from our talent partners, who will guide you through the IT job search process and help you succeed in landing the perfect IT career opportunity.`,
  },
]

const STEPS = [
  {
    title: `Create your Resume`,
    content: `Build your resume and tailor your IT job preferences to highlight your skills, experience, and IT career goals, ensuring you attract the right job opportunities in the IT industry.`,
  },
  {
    title: `Apply with Ease`,
    content: `Explore personalized IT job matches and apply effortlessly with a single click using our streamlined application process, designed to help you secure the best IT career opportunities.`,
  },
  {
    title: `Get Vetted`,
    content: `Stand out from the IT job competition by completing our technical assessments.`,
  },
  {
    title: `Receive IT jobs interview`,
    content: `Discover tailored IT job matches and apply instantly with just one click- designed to connect you with the best IT career opportunities.`,
  },
  {
    title: `Track Your Applications`,
    content: `Keep your IT job search organised by tracking your application status in our dashboard. Monitor your progress and receive real-time updates on employer responses.`,
  },
]
