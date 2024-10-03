import DefaultPageLayout from 'src/components/DefaultPageLayout'

import SectionTitle from 'src/components/SectionTitle'
import MetaTitle from '../meta/MetaTitle'

export default function AboutUsPage() {
  return (
    <DefaultPageLayout>
      <MetaTitle content="About Us - Tecddy" />
      <SectionTitle
        variant="hero"
        title={
          <>
            Our <strong>Mission</strong>
          </>
        }
        description={
          <>
            At Tecddy, our mission is to enable companies to focus on what
            matters by ensuring the tech hiring process is of high quality,
            efficient, and equitable. We strive to make recruitment fair for
            everyone involved.
            <br />
            <br />
            Upon returning to Hong Kong from NYC, we observed that tech
            recruitment practices in Asia were often outdated, manual, and
            heavily reliant on outdated screening methods. Evaluations tended to
            prioritize experience over skills, and candidates frequently faced
            issues such as ghosting and a lack of feedback.
          </>
        }
      />

      <SectionTitle
        title={
          <>
            Our <strong>Journey</strong>
          </>
        }
        description={
          <>
            As software engineers, we have firsthand experience with the
            challenges of the recruitment process from both sides of the table.
            We have spent countless hours in interviews, both as candidates and
            hiring managers, and understand the inefficiencies and frustrations
            involved.
            <br />
            <br />
            Driven by a desire to improve tech recruitment, we developed
            prototypes such as a tech-specific job board and an AI tool for
            resume screening and contextual interview questions. This journey
            led us to create an AI-powered platform designed to streamline and
            enhance the recruitment, and vetting of tech talent.
          </>
        }
      />

      <SectionTitle
        title={
          <>
            Our <strong>Vision</strong>
          </>
        }
        description={
          <>
            Our vision is to grow alongside companies and candidates, offering a
            solution that evolves with their needs. We aim to provide a platform
            that delivers data for accurate candidate assessments and tracks
            employee progression, ensuring long-term success for all parties.
            <br />
            <br />
            Our goal is to offer better insights and more efficient tools to
            revolutionize how tech talent is hired, ensuring fair and effective
            processes for everyone.
          </>
        }
      />
    </DefaultPageLayout>
  )
}
