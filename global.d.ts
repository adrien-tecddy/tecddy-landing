declare module '*.svg?url' {
  const content: string

  export default content
}

declare module '*.svg?component' {
  import React from 'react'

  const content: React.VFC<React.SVGProps<SVGSVGElement>>

  export default content
}
