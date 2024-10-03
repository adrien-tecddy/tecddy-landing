import { FC, ReactNode } from 'react'

import scss from './style.module.scss'

interface Props {
  items: {
    icon?: FC<{ className?: string }>
    title: ReactNode
    content: ReactNode
  }[]
}

export default function GridCards({ items }: Props) {
  return (
    <div className={scss.WhyCards}>
      {items.map(({ icon: Icon, title, content }, index) => {
        return (
          <div className={scss.WhyCards_item} key={index}>
            <div className={scss.WhyCards_illustrations}>
              {Icon && <Icon className={scss.WhyCards_icon} />}
            </div>
            <div className={scss.WhyCards_texts}>
              <h3 className={scss.WhyCards_title}>{title}</h3>
              <h4 className={scss.WhyCards_content}>{content}</h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}
