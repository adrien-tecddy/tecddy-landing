import { useEffect, useState } from "react";

export default function useNow() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, [setNow]);

  return now;
}
