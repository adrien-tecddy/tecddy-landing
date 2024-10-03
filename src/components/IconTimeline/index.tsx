import { FC, ReactNode } from 'react'
import scss from './style.module.scss'

interface StepsProps {
  items: {
    icon: FC<{ className?: string }>
    content: ReactNode
    title: ReactNode
  }[]
}

export default function IconTimeline({ items }: StepsProps) {
  return (
    <div className={scss.Steps}>
      {items.map(({ icon: Icon, content, title }, index) => (
        <div className={scss.Steps_item} key={index}>
          <div className={scss.Steps_puce}>
            <Icon className={scss.Steps_icon} />
          </div>
          <div className={scss.Steps_texts}>
            <h3 className={scss.Steps_title}>
              {`${index + 1}. `}
              {title}
            </h3>
            <h4 className={scss.Steps_content}>{content}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}
