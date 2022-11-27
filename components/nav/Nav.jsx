import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Nav.module.css'
import { FaStarOfLife } from 'react-icons/fa'

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setMenuIsOpen(false)
    })
  }, [])

  const getMenuClassName = () =>
    menuIsOpen ? [styles.menuBtn, styles.isOpen].join(' ') : styles.menuBtn
  const getLinksClassName = () =>
    menuIsOpen ? [styles.navLinks, styles.isOpen].join(' ') : styles.navLinks

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <FaStarOfLife />
          Cleopatra
        </Link>
        <button
          className={getMenuClassName()}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <div className={styles.menuBar} data-id="1"></div>
          <div className={styles.menuBar} data-id="2"></div>
          <div className={styles.menuBar} data-id="3"></div>
        </button>
        <ul className={getLinksClassName()}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Categories</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
