import CircledText from '@components/circledText/CircledText'
import styles from './Hero.module.css'
import { IoEnterOutline } from 'react-icons/io5'
import {FiShoppingCart, FiGift} from 'react-icons/fi'

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>
          Wear the <CircledText>best.</CircledText>
        </h1>
        <p className={styles.heroDesc}>
          Get amazing clothing at affordable prices. Look good, feel good.
        </p>
      </div>
      
      <div className={styles.heroBtns}>
        <button>
          Shop now <FiShoppingCart />
        </button>
        <button>
          See promo <FiGift />
        </button>
      </div>
    </div>
  )
}

export default Hero
