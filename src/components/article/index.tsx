import { ReactNode } from "react";

import scss from "./style.module.scss";

export function Lead({ children }: { children: ReactNode }) {
  return <p className={scss.Lead}>{children}</p>;
}

export function Article({ children }: { children: ReactNode }) {
  return <div className={scss.Article}>{children}</div>;
}

export function Buttons({
  children,
  title,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={scss.Buttons}>
      <div className={scss.Buttons_title}>{title}</div>
      <div className={scss.Buttons_children}>{children}</div>
    </div>
  );
}

export function References({
  items,
}: {
  items: { label: ReactNode; href: string }[];
}) {
  return (
    <div className={scss.References}>
      <div className={scss.References_title}>References</div>
      <ul className={scss.References_list}>
        {items.map(({ label, href }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
