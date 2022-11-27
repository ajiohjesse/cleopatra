import styles from './CircledText.module.css'
import ellipse from '@public/images/ellipse.svg'
import Image from 'next/image'

const CircledText = ({ children }) => {
  return (
    <div className={styles.text}>
      <Image src={ellipse} fill className={styles.ellipse} alt="" aria-hidden />
      {children}
    </div>
  )
}

export default CircledText
