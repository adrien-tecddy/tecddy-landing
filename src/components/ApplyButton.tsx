import { ReactNode } from "react";

import { AnchorButton } from "./Button";
import { TALENT_ORIGIN } from "src/constants/env";

interface Props {
  positionOfferId: string;
  children: ReactNode;
}

export default function ApplyButton({ positionOfferId, children }: Props) {
  return (
    <AnchorButton href={`${TALENT_ORIGIN}/position-offer/${positionOfferId}`}>
      {children}
    </AnchorButton>
  );
}
