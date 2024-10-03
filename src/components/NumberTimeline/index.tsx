import { ReactNode } from "react";
import scss from "./style.module.scss";

interface Props {
  items: {
    content: ReactNode;
    title: ReactNode;
  }[];
}

export default function NumberTimeline({ items }: Props) {
  return (
    <div className={scss.Steps}>
      {items.map(({ content, title }, index) => (
        <div className={scss.Steps_item} key={index}>
          <div className={scss.Steps_puce}>{index + 1}</div>
          <div className={scss.Steps_texts}>
            <h3 className={scss.Steps_title}>{title}</h3>
            <p className={scss.Steps_content}>{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
