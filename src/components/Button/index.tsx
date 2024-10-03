import clsx from "clsx/lite";
import Link from "next/link";
import { ComponentProps } from "react";

import scss from "./style.module.scss";

const VARIANTS = {
  primary: scss.__primary,
  outline: scss.__outline,
} as const;

interface Props {
  variant?: keyof typeof VARIANTS;
  compact?: boolean;
}

type ButtonProps<T> = Props & Omit<T, "className">;

export default function Button({
  children,
  variant,
  compact,
  ...props
}: ButtonProps<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>) {
  return (
    <button
      className={clsx(
        scss.button,
        compact && scss.__compact,
        variant && VARIANTS[variant],
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function AnchorButton({
  children,
  variant,
  compact,
  ...props
}: ButtonProps<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
>) {
  return (
    <a
      className={clsx(
        scss.button,
        compact && scss.__compact,
        variant && VARIANTS[variant],
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function LinkButton({
  children,
  variant,
  compact,
  ...props
}: ButtonProps<ComponentProps<typeof Link>>) {
  return (
    <Link
      className={clsx(
        scss.button,
        compact && scss.__compact,
        variant && VARIANTS[variant],
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
