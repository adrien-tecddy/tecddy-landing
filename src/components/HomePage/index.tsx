import DefaultPageLayout from "src/components/DefaultPageLayout";
import { AnchorButton, LinkButton } from "src/components/Button";
import IconTimeline from "src/components/IconTimeline";
import SectionTitle from "src/components/SectionTitle";
import GridCards from "src/components/GridCards";

import ClipboardIcon from "src/icons/Clipboard-60.svg?component";
import InterviewIcon from "src/icons/Interview-60.svg?component";
import RankIcon from "src/icons/Rank-60.svg?component";
import CreateIcon from "src/icons/Create-60.svg?component";
import WorkflowIcon from "src/icons/Workflow-100.svg?component";
import TimeSavingIcon from "src/icons/TimeSaving-100.svg?component";
import ScaleIcon from "src/icons/Scale-100.svg?component";
import HiringIcon from "src/icons/Hiring-100.svg?component";
import EvaluateIcon from "src/icons/Evaluate-100.svg?component";
import DetectIcon from "src/icons/Detect-100.svg?component";
import ManageIcon from "src/icons/Manage-100.svg?component";

import { EMPLOYER_ORIGIN } from "src/constants/env";

import JourneyImageSource from "./images/Journey.svg?url";

import scss from "./style.module.scss";
import MetaKeywords from "../meta/MetaKeywords";
import MetaTitle from "../meta/MetaTitle";

export default function HomePage() {
  return (
    <DefaultPageLayout>
      <MetaTitle content="Find IT jobs and software engineering with Tecddy" />
      <MetaKeywords content={["It jobs", "Programmer", "Developer"]} />
      <SectionTitle
        variant="hero"
        title={
          <>
            Streamline for IT jobs,
            <br />
            Find Programmers and Developers with <strong>Tecddy</strong>
          </>
        }
        action={
          <>
            <AnchorButton href={`${EMPLOYER_ORIGIN}/`}>
              Hire Talents
            </AnchorButton>
            <LinkButton variant="outline" href="/talent">
              Find Jobs
            </LinkButton>
          </>
        }
        subtitle={
          <>
            Your AI-powered IT recruitment companion. Effortlessly find vetted
            programmers and developers for your IT jobs. Experience hassle-free
            hiring today with Tecddy!
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
            Revolutionize hiring for IT jobs: Smarter Solutions for Faster,
            Better Results
          </>
        }
        description={
          <>
            We revolutionize the IT jobs hiring process by connecting you to top
            programmers and developers. Our solutions empower you to make
            smarter and faster hiring decisions, ensuring you get the best
            talent for your needs.
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
            At Tecddy, we&apos;ve crafted a streamlined IT jobs hiring process
            that enables employers to make informed, data-driven decisions and
            secure the best programmers and developers for their teams.
            Here&apos;s how it works:
          </>
        }
      />
      <IconTimeline items={STEPS} />

      <SectionTitle title="Why Choose Tecddy" />
      <GridCards items={WHY_CARDS} />
    </DefaultPageLayout>
  );
}
const STEPS = [
  {
    title: `Describe your dream hire`,
    content: ` Easily create IT job openings and specify the skills required for your ideal programmer or developer. Our platform makes it simple to outline the qualifications needed for your project.`,
    icon: CreateIcon,
  },
  {
    title: `Review Top Candidates`,
    content: `EAfter posting your IT jobs, our algorithm ranks programmers and developers by their scores. Save time by quickly shortlisting the top candidates who match your requirements.`,
    icon: RankIcon,
  },
  {
    title: `Technical Interviews from Tecddy`,
    content: `We handle the technical interviews for IT jobs. Our experienced interviewers evaluate programmers and developers using industry-standard methods, ensuring accurate assessments that you can trust.`,
    icon: InterviewIcon,
  },
  {
    title: `Hire with Confidence`,
    content: `Get detailed evaluation reports and feedback for each candidate. These insights into programmers' and developers' technical skills help you make informed hiring decisions for IT jobs.`,
    icon: ClipboardIcon,
  },
];

const WHY_CARDS = [
  {
    icon: HiringIcon,
    title: "Robust IT jobs signal",
    content:
      "Experience robust signals for IT jobs with our advanced algorithms. We rank programmers and developers based on their technical assessment scores, ensuring that you have top talent in your hiring pipeline.",
  },
  {
    icon: TimeSavingIcon,
    title: "Time-Saving Hiring",
    content:
      "Say goodbye to hours spent sifting through resumes for IT jobs. Our streamlined screening process saves you time, helping you find the right programmers and developers.",
  },
  {
    icon: WorkflowIcon,
    title: "Customizable IT Jobs Workflow",
    content:
      "Tailor your IT jobs process to your specific needs. Customize the workflow to evaluate programmers' and developers' skills with targeted assessments and detailed technical interviews.",
  },
  {
    icon: DetectIcon,
    title: "Cheat-resistant Assessments",
    content:
      "Ensure the integrity of your assessments for IT jobs with our cheat-resistant platform. We detect and prevent cheating, providing you with reliable results for evaluating programmers and developers.",
  },
  {
    icon: EvaluateIcon,
    title: "Consistent IT jobs Evaluation Process",
    content:
      "Maintain a fair and consistent evaluation process for IT jobs. Our scoring rubrics and benchmarking methods enable accurate comparisons, helping you make informed decisions when hiring programmers and developers.",
  },
  {
    icon: ManageIcon,
    title: "Scalable IT Platform",
    content:
      "Effortlessly manage IT job applications. Our platform scales smoothly to handle large pools of programmers and developers efficiently.",
  },
  {
    icon: ScaleIcon,
    title: "Equitable Candidate Experience",
    content:
      "Promote fairness in IT job evaluations. We provide an equitable experience, assessing programmers and developers solely based on their merits.",
  },
];
