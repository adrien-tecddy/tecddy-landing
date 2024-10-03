import DefaultPageLayout from "src/components/DefaultPageLayout";

import scss from "./style.module.scss";
import { LinkButton } from "../Button";
import MetaTitle from "../meta/MetaTitle";

export default function NotFoundPage() {
  return (
    <DefaultPageLayout mainClassName={scss.main}>
      <MetaTitle content="Not Found - Tecddy" />
      <h1 className={scss.title}>
        404
        <br />
        <strong>Page Not Found</strong>
      </h1>
      <h3 className={scss.subtitle}>
        We can’t find the page you are looking for.
      </h3>
      <LinkButton href={"/"}>Back to Home</LinkButton>
    </DefaultPageLayout>
  );
}
