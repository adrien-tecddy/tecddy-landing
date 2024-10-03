import { ReactNode } from 'react'

import scss from './style.module.scss'

interface Props {
  children: ReactNode
  title: ReactNode
}

export default function SimpleCard({ children, title }: Props) {
  return (
    <div className={scss.outer}>
      <div className={scss.title}>{title}</div>
      <div className={scss.content}>{children}</div>
    </div>
  )
}
