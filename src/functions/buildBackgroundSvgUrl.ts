export default function buildBackgroundSvgUrl(h: number, color: string) {
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg width="1" height="${h}" viewBox="0 0 1 ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="${h}" fill="${color}"/></svg>`,
  )}")`
}
