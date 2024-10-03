import SimpleCard from 'src/components/SimpleCard'

import FacebookSquareIcon from 'src/icons/FacebookSquare-48.svg?component'
import LinkedInSquareIcon from 'src/icons/LinkedInSquare-48.svg?component'
import TelegramAppIcon from 'src/icons/TelegramApp-48.svg?component'
import ThreadsIcon from 'src/icons/Threads-48.svg?component'
import TwitterXIcon from 'src/icons/TwitterX-48.svg?component'
import WhatsAppIcon from 'src/icons/WhatsApp-48.svg?component'

import scss from './style.module.scss'

interface Props {
  url: string
  label: string
}

export default function ShareSimpleCard({ url, label }: Props) {
  const encodedCanonicalUrl = encodeURI(url)
  const encodedDisplayName = encodeURI(label)

  return (
    <SimpleCard title="Share">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedCanonicalUrl}`}
        aria-label="Share on LinkedIn"
        target="_blank"
        rel="noopener"
      >
        <LinkedInSquareIcon className={scss.share_icon} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedCanonicalUrl}`}
        aria-label="Share on Facebook"
        target="_blank"
        rel="noopener"
      >
        <FacebookSquareIcon className={scss.share_icon} />
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${encodedCanonicalUrl}%20${encodedDisplayName}`}
        aria-label="Share on WhatsApp"
        target="_blank"
        rel="noopener"
      >
        <WhatsAppIcon className={scss.share_icon} />
      </a>
      <a
        href={`https://t.me/share/url?url=${encodedCanonicalUrl}&text=${encodedDisplayName}`}
        aria-label="Share on Telegram"
        target="_blank"
        rel="noopener"
      >
        <TelegramAppIcon className={scss.share_icon} />
      </a>
      <a
        href={`https://www.threads.net/intent/post?text=${encodedCanonicalUrl}`}
        aria-label="Share on Threads"
        target="_blank"
        rel="noopener"
      >
        <ThreadsIcon className={scss.share_icon} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedCanonicalUrl}`}
        aria-label="Share on Threads"
        target="_blank"
        rel="noopener"
      >
        <TwitterXIcon className={scss.share_icon} />
      </a>
    </SimpleCard>
  )
}
