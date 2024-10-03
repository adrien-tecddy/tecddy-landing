import { ReactNode } from 'react'

import scss from './style.module.scss'

interface Props {
  children: ReactNode
}

export default function ButtonsSection({ children }: Props) {
  return <div className={scss.outer}>{children}</div>
}
