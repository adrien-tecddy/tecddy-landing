import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
  url: string;
  fallback: ReactNode;
}

export default function RouteReplace({ url, fallback }: Props) {
  const { isReady, replace, pathname } = useRouter();

  useEffect(() => {
    if (!isReady) {
      return;
    }
    if (pathname === url) {
      // NOTE: do not redirect
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises -- I don't care
    replace(url);
  }, [isReady, replace, pathname, url]);

  return fallback;
}
