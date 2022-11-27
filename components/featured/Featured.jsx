import { Container } from '@components/styled/Container'
import styles from './Featured.module.css'
import formal from '@public/images/formal.jpg'
import street from '@public/images/afro-girl.jpg'
import casual from '@public/images/orange-shirt.jpg'
import Image from 'next/image'

const Featured = () => {
  return (
    <section className={styles.featured}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.circleText}>Be your best</div>
          <div className={styles.formal}>
            <div className={styles.imageTitle}>
              <p>formal wear</p>
            </div>
            <Image
              className={styles.featuredImg}
              src={formal}
              fill
              alt="woman in red coat"
            />
          </div>

          <div className={styles.street}>
            <div className={styles.imageTitle}>
              <p>street style</p>
            </div>
            <Image
              className={styles.featuredImg}
              src={street}
              fill
              alt="woman in red coat"
            />
          </div>

          <div className={styles.casual}>
            <div className={styles.imageTitle}>
              <p>casual wear</p>
            </div>
            <Image
              className={styles.featuredImg}
              src={casual}
              fill
              alt="woman in red coat"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Featured
