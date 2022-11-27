import { Container } from '@components/styled/Container'
import styles from './Trending.module.css'
import afroGirl from '@public/images/afro-girl.jpg'
import formal from '@public/images/formal2.jpg'
import Image from 'next/image'

const Trending = () => {
  return (
    <section className={styles.trending}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.firstTrend}>
            <h2>Bringing You the Elements of Style.</h2>
            <div className={styles.image}>
              <Image src={formal} fill alt="lady in coat with red handbag" />
            </div>
          </div>

          <div className={styles.secondTrend}>
            <p>
              Travel with us to where passion meets creativity and fashion meets
              design.
            </p>
            <div className={styles.image}>
              <Image src={afroGirl} fill alt="lady with casual clothes" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Trending
