import Hero from '@components/hero/Hero'
import Nav from '@components/nav/Nav'
import { Container } from '@components/styled/Container'
import Image from 'next/image'
import styles from './Header.module.css'
import clothes from '@public/images/clothes-rack.jpg'

const Header = () => {
  return (
    <section className={styles.headerWrapper}>
      <div className={styles.heroImg}>
        <Image src={clothes} fill objectFit="cover" alt="cloths on a rack" />
      </div>
      <Container>
        <Nav />
        <Hero />
      </Container>
    </section>
  )
}

export default Header
