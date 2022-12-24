import { Container } from '@components/styled/Container'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link href="/">Categories</Link>
              </li>
              <li>
                <Link href="/">Promo</Link>
              </li>
              <li>
                <Link href="/">Men Product</Link>
              </li>
              <li>
                <Link href="/">Women Product</Link>
              </li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3>Social Media</h3>

            <ul>
              <li>
                <Link href="/">Facebook</Link>
              </li>
              <li>
                <Link href="/">Instagram</Link>
              </li>
              <li>
                <Link href="/">Twitter</Link>
              </li>
              <li>
                <Link href="/">YouTube</Link>
              </li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3>About</h3>

            <ul>
              <li>
                <Link href="/">Company</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Legal</Link>
              </li>
              <li>
                <Link href="/">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className={styles.copyright}>
        <Container>
          <p>&copy;Copyright 2022 - Jesse Ajioh</p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer

