import { useMemo, memo } from "react";
import Link from "next/link";

import scss from "./style.module.scss";

interface PaginationProps {
  pathname: string;
  current: number;
  total: number;
}

const Pagination = memo(function Pagination({
  pathname,
  current,
  total,
}: PaginationProps) {
  const pages = useMemo(() => {
    const min = Math.max(current - 3, 0);
    const max = Math.min(current + 3, total);

    const indexes: number[] = [];

    for (let i = min; i <= max; i++) {
      indexes.push(i);
    }

    return indexes;
  }, [current, total]);

  return (
    <div className={scss.pagination}>
      <ul className={scss.pagination_pages}>
        {current !== 0 && (
          <>
            <li key="first">
              <Link href={{ pathname, query: { page: 0 } }}>{"First"}</Link>
            </li>
            <li key="prev">
              <Link href={{ pathname, query: { page: current - 1 } }}>
                {"Previous"}
              </Link>
            </li>
          </>
        )}
        {pages.map((index) => {
          return (
            <li
              key={index}
              className={current === index ? scss.__selected : undefined}
            >
              <Link href={{ pathname, query: { page: index } }}>
                {index + 1}
              </Link>
            </li>
          );
        })}
        <li key="next">
          <Link href={{ pathname, query: { page: current + 1 } }}>
            {"Next"}
          </Link>
        </li>
        <li key="last">
          <Link href={{ pathname, query: { page: total } }}>{"Last"}</Link>
        </li>
      </ul>
    </div>
  );
});

export default Pagination;
