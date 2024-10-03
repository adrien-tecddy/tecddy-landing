import { ReactNode, FC } from 'react'
import clsx from 'clsx/lite'

import scss from './style.module.scss'

const CHIP_VARIANTS = {
  purple: scss.__purple,
  green: scss.__green,
  blue: scss.__blue,
} as const

interface ChipsProps {
  children: ReactNode
}

export function Chips({ children }: ChipsProps) {
  return <span className={scss.chips}>{children}</span>
}

interface ChipProps {
  variant?: keyof typeof CHIP_VARIANTS
  icon?: FC<{ className?: string }>
  label: string
}

export function Chip({ icon: Icon, variant, label }: ChipProps) {
  return (
    <span
      className={clsx(scss.chip, variant && CHIP_VARIANTS[variant])}
      title={label}
    >
      {Icon ? <Icon className={scss.icon} /> : null}
      {label}
    </span>
  )
}
