import DefaultPageLayout from 'src/components/DefaultPageLayout'

import scss from './style.module.scss'
import { LinkButton } from '../Button'
import MetaTitle from '../meta/MetaTitle'

export default function InternalServerErrorPage() {
  return (
    <DefaultPageLayout mainClassName={scss.main}>
      <MetaTitle content="Internal Server Error - Tecddy" />
      <h1 className={scss.title}>
        500
        <br />
        <strong>Internal Server Error</strong>
      </h1>
      <h3 className={scss.subtitle}>Our team is working on fixing that.</h3>
      <LinkButton href={'/'}>Back to Home</LinkButton>
    </DefaultPageLayout>
  )
}
