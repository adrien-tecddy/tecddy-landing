import { ReactNode, useCallback, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import MenuIcon from 'src/icons/Menu-16.svg?component'
import CloseIcon from 'src/icons/Close-16.svg?component'

import LogoTextImage from 'src/images/LogoText-Fit.svg?component'

import scss from './style.module.scss'
import Link from 'next/link'

const CLASS_NAMES = {
  appear: scss.__appear,
  appearActive: scss.__appearActive,
  appearDone: scss.__appearDone,
  enter: scss.__enter,
  enterActive: scss.__enterActive,
  enterDone: scss.__enterDone,
  exit: scss.__exit,
  exitActive: scss.__exitActive,
  exitDone: scss.__exitDone,
}

interface Props {
  children: ReactNode
}

export default function MobileMenu({ children }: Props) {
  const [state, setState] = useState<boolean>(false)
  const nodeRef = useRef(null)

  const toggle = useCallback(() => {
    setState((s) => !s)
  }, [setState])

  return (
    <>
      <button
        className={scss.iconButton}
        onClick={toggle}
        aria-label="Open Menu"
      >
        <MenuIcon className={scss.iconButton_icon} />
      </button>
      <CSSTransition
        unmountOnExit
        nodeRef={nodeRef}
        in={state}
        timeout={300}
        classNames={CLASS_NAMES}
      >
        <div className={scss.outer} ref={nodeRef}>
          <div className={scss.head}>
            <Link href="/">
              <LogoTextImage className={scss.logo} />
            </Link>
            <button className={scss.iconButton} onClick={toggle}>
              <CloseIcon className={scss.iconButton_icon} />
            </button>
          </div>
          <div className={scss.body}>
            <ul className={scss.list}>{children}</ul>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}
