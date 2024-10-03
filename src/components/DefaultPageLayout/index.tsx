import { ReactNode } from 'react'
import Link from 'next/link'

import LinkedInIcon from 'src/icons/LinkedInSquare-24.svg?component'
import InstagramIcon from 'src/icons/Instagram-24.svg?component'
import LogoTextImage from 'src/images/LogoText-Fit.svg?component'

import MobileMenu from './components/MobileMenu'

import scss from './style.module.scss'

interface Props {
  mainClassName?: string
  children: ReactNode
}

const LINKEDIN_URL = 'https://www.linkedin.com/company/tecddy/'

export default function DefaultPageLayout({ children, mainClassName }: Props) {
  return (
    <>
      <div className={scss.header_outer}>
        <div className={scss.header_inner}>
          <Link href="/" aria-label="Tecddy Home Page">
            <LogoTextImage className={scss.header_logo} />
          </Link>

          <div className={scss.header_mobile_menu}>
            <MobileMenu>
              <li>
                <Link href={`/companies`}>Discover Companies</Link>
              </li>
              <li>
                <Link href={`/employer`}>Hire</Link>
              </li>
              <li>
                <Link href={`/talent`}>Talent</Link>
              </li>
              <li>
                <Link href={`/about-us`}>About us</Link>
              </li>
            </MobileMenu>
          </div>

          <ul className={scss.header_links}>
            <li className={scss.__hidable}>
              <Link href={`/companies`}>Discover</Link>
            </li>
            <li className={scss.__hidable}>
              <Link href={`/employer`}>Hire</Link>
            </li>
            <li className={scss.__hidable}>
              <Link href={`/talent`}>Talent</Link>
            </li>
            <li className={scss.__hidable}>
              <Link href={`/about-us`}>About us</Link>
            </li>
          </ul>
        </div>
      </div>
      <main className={[scss.main, mainClassName].join(' ')}>{children}</main>
      <div className={scss.footer_outer}>
        <div className={scss.footer_inner}>
          <section className={scss.footer_socials}>
            <LogoTextImage className={scss.footer_logo} />
            <ul className={scss.footer_socials_list}>
              <li>
                <a href={LINKEDIN_URL} aria-label="Tecddy's LinkedIn Page">
                  <LinkedInIcon className={scss.footer_icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tecddy_/"
                  aria-label="Tecddy's Instagram Page"
                >
                  <InstagramIcon className={scss.footer_icon} />
                </a>
              </li>
            </ul>
          </section>
          <div className={scss.footer_links}>
            <section className={scss.footer_links_section}>
              <div className={scss.footer_links_title}>Sitemap</div>
              <ul>
                <li>
                  <Link href="/companies">Companies</Link>
                </li>
                <li>
                  <Link href="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link href={`/employer`}>Hire</Link>
                </li>
                <li>
                  <Link href={`/talent`}>Talent</Link>
                </li>
              </ul>
            </section>
            <section className={scss.footer_links_section}>
              <div className={scss.footer_links_title}>Company</div>
              <ul>
                <li>
                  <Link href="/about-us">About us</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className={scss.footer_copyrights}>
          © 2024 Tecddy Limited, All rights reserved.
        </div>
      </div>
    </>
  )
}
