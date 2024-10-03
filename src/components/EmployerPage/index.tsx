import DefaultPageLayout from 'src/components/DefaultPageLayout'
import { LinkButton } from 'src/components/Button'
import IconTimeline from 'src/components/IconTimeline'
import SectionTitle from 'src/components/SectionTitle'
import GridCards from 'src/components/GridCards'

import ClipboardIcon from 'src/icons/Clipboard-60.svg?component'
import InterviewIcon from 'src/icons/Interview-60.svg?component'
import RankIcon from 'src/icons/Rank-60.svg?component'
import CreateIcon from 'src/icons/Create-60.svg?component'
import WorkflowIcon from 'src/icons/Workflow-100.svg?component'
import TimeSavingIcon from 'src/icons/TimeSaving-100.svg?component'
import ScaleIcon from 'src/icons/Scale-100.svg?component'
import HiringIcon from 'src/icons/Hiring-100.svg?component'
import EvaluateIcon from 'src/icons/Evaluate-100.svg?component'
import DetectIcon from 'src/icons/Detect-100.svg?component'
import ManageIcon from 'src/icons/Manage-100.svg?component'

import JourneyImageSource from './images/Journey.svg?url'

import scss from './style.module.scss'

export default function EmployerPage() {
  return (
    <DefaultPageLayout>
      <SectionTitle
        variant="hero"
        title={
          <>
            Streamline Your Hiring Process,
            <br />
            <strong>Tecddy</strong> Finds and Delivers Top Tech Talent
          </>
        }
        action={
          <>
            <LinkButton variant="outline" href="/talent">
              Find Jobs
            </LinkButton>
          </>
        }
        subtitle={
          <>
            Your AI-powered tech recruitment companion. Effortlessly find vetted
            talent. Experience hassle-free hiring today!
          </>
        }
      />

      <iframe
        className={scss.video}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/b0PQx5X6OIg?si=S0qLEvJHpYPlrlm8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <SectionTitle
        title="What we do"
        subtitle={
          <>
            Transforming Hiring: Smarter Solutions for Faster and Better Results
          </>
        }
        description={
          <>
            We accelerate your tech hiring process, connect you to the top tech
            talent, and empower you to make better hiring decisions.
          </>
        }
      />
      <img
        className={scss.illustration}
        alt="Job Opening Journey"
        src={JourneyImageSource}
      />

      <SectionTitle
        title="How it Works"
        description={
          <>
            At Tecddy, we&apos;ve developed a seamless hiring process that
            empowers employers to make data-driven decisions and find the best
            candidates for their teams. Here&apos;s how it works:
          </>
        }
      />
      <IconTimeline items={STEPS} />

      <SectionTitle title="Why Choose Tecddy" />
      <GridCards items={WHY_CARDS} />
    </DefaultPageLayout>
  )
}
const STEPS = [
  {
    title: `Describe your dream hire`,
    content: `Easily create job openings on our platform. Provide required skills to attract the right talent.`,
    icon: CreateIcon,
  },
  {
    title: `Shortlist Top-Ranked Candidates`,
    content: `Once your job openings are live, our advanced algorithm will rank applicants based on their technical assessment scores. Review and shortlist your favourite candidates who meet your criteria, saving you valuable time.`,
    icon: RankIcon,
  },
  {
    title: `Technical Interviews from Tecddy`,
    content: `We take care of the technical interview process for you. Our experienced interviewers evaluate candidates using industry-standard methodologies, ensuring consistent and accurate assessments.`,
    icon: InterviewIcon,
  },
  {
    title: `Hire with Confidence`,
    content: `Receive detailed evaluation reports and feedback for each candidate. These reports provide valuable insights into their technical skills, strengths, and areas for improvement, enabling you to make informed hiring decisions.`,
    icon: ClipboardIcon,
  },
]

const WHY_CARDS = [
  {
    icon: HiringIcon,
    title: `Robust Hiring Signals`,
    content: `Experience robust hiring signals with our advanced algorithms. We rank candidates based on their technical assessment scores, ensuring a higher caliber of talent in your pipeline.`,
  },
  {
    icon: TimeSavingIcon,
    title: `Time-Saving Hiring`,
    content: `Say goodbye to hours spent sifting through resumes. Our streamlined screening process frees up your valuable time for finding the right fit.`,
  },
  {
    icon: WorkflowIcon,
    title: `Customizable Workflows`,
    content: `Tailor your hiring process to your needs. Customize the entire workflow and evaluate candidates' skills with targeted assessments and technical interviews.`,
  },
  {
    icon: DetectIcon,
    title: `Cheat-resistant Assessments `,
    content: `Ensure assessment integrity with our cheat-resistant platform. We detect and prevent cheating behaviors, providing reliable results.`,
  },
  {
    icon: EvaluateIcon,
    title: `Consistent Evaluation Process`,
    content: `Maintain a fair evaluation process. Our scoring rubrics and benchmarking methods enable accurate comparisons and informed decision-making.`,
  },
  {
    icon: ManageIcon,
    title: `Scalable Platform`,
    content: `Handle high application volumes effortlessly. Our platform scales seamlessly, allowing you to efficiently manage large candidate pools.`,
  },
  {
    icon: ScaleIcon,
    title: `Equitable Candidate Experience`,
    content: `Promote fairness and unbiased evaluations. We provide an equitable experience, assessing candidates solely based on their merits.`,
  },
]
