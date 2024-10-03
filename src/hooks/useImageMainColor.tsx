import { prominent } from 'color.js'

import { useEffect, useState, MutableRefObject } from 'react'

async function extractMainColor(img: HTMLImageElement) {
  try {
    const colors = await prominent(img, { format: 'hex' })
    const color = colors[0]

    if (typeof color === 'string') {
      return color
    }
  } catch (error) {
    // eslint-disable-next-line no-console -- Ignore error but log it
    console.error(error)
  }
  return null
}

export default function useImageMainColor(
  imgRef: MutableRefObject<HTMLImageElement | null>,
) {
  const [mainColor, setMainColor] = useState<string | null>(null)

  useEffect(() => {
    if (!imgRef.current) {
      return
    }

    if (imgRef.current.complete) {
      extractMainColor(imgRef.current).then(
        (color) => {
          setMainColor(color)
        },
        (error) => {
          // eslint-disable-next-line no-console -- Ignore error but log it
          console.error(error)
        },
      )
      return
    }

    const onLoad = (event: Event) => {
      if (event.target instanceof HTMLImageElement) {
        extractMainColor(event.target).then(
          (color) => {
            setMainColor(color)
          },
          (error) => {
            // eslint-disable-next-line no-console -- Ignore error but log it
            console.error(error)
          },
        )
      }
    }

    imgRef.current.addEventListener('load', onLoad)

    return () => {
      imgRef.current?.removeEventListener('load', onLoad)
    }
  }, [setMainColor])

  return mainColor
}
