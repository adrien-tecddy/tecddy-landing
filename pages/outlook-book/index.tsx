import { GetServerSideProps } from "next";
import RedirectOutlookBookPage from "src/components/RedirectOutlookBookPage";

interface Props {
  bookingId: string;
}

// eslint-disable-next-line @typescript-eslint/require-await -- GetServerSideProps require promise
export const getServerSideProps = (async (ctx) => {
  const bookingId = ctx.query["booking-id"];

  return {
    props: {
      bookingId:
        typeof bookingId === "string"
          ? bookingId
          : "DiscoverycallwTecddy@tecddy.com",
    },
  };
}) satisfies GetServerSideProps<Props>;

export default function PagesOutlookBookIndex({ bookingId }: Props) {
  return <RedirectOutlookBookPage bookingId={bookingId} />;
}
