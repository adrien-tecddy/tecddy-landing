import { ReactNode } from 'react'
import clsx from 'clsx/lite'

import scss from './style.module.scss'

const VARIANTS = {
  hero: scss.__hero,
} as const

interface SectionTitleProps {
  title: ReactNode
  action?: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
  variant?: keyof typeof VARIANTS
}

export default function SectionTitle({
  action,
  title,
  variant,
  subtitle,
  description,
}: SectionTitleProps) {
  const Tag = variant === 'hero' ? 'h1' : 'h2'

  return (
    <div className={clsx(scss.SectionTitle, variant && VARIANTS[variant])}>
      <Tag className={scss.SectionTitle_title}>{title}</Tag>
      {subtitle && <h3 className={scss.SectionTitle_subtitle}>{subtitle}</h3>}
      {description && (
        <h4 className={scss.SectionTitle_description}>{description}</h4>
      )}
      {action && <div className={scss.SectionTitle_action}>{action}</div>}
    </div>
  )
}
