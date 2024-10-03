interface RawLinkingDataProps {
  data: object;
}

export default function RawLinkingData({ data }: RawLinkingDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
