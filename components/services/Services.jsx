import styles from './Services.module.css'
import { TbTruckDelivery, TbCurrencyNaira, TbLock } from 'react-icons/tb'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { Container } from '@components/styled/Container'

const Services = () => {
  return (
    <section className={styles.services}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <TbTruckDelivery />
            </div>

            <p>Super Fast and Free Delivery</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <HiOutlineBadgeCheck />
            </div>
            <p>Non-contact Shipping</p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <TbCurrencyNaira />
            </div>
            <p>Money-back guarantee</p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <TbLock />
            </div>
            <p>Super Secure Payment Stystem</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services
