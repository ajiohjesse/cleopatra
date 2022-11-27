import CircledText from '@components/circledText/CircledText'
import styles from './Hero.module.css'
import { IoEnterOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <h1 className={styles.heroTitle}>
        Wear the <CircledText>best.</CircledText>
      </h1>
      <p className={styles.heroDesc}>
        Get amazing clothing at affordable prices. Look good, feel good.
      </p>
      <div className={styles.heroBtns}>
        <button>
          Shop now <IoEnterOutline />
        </button>
        <button>
          See promo <IoEnterOutline />
        </button>
      </div>
    </div>
  )
}

export default Hero
