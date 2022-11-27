import styles from './ProductCard.module.css'
import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'

const ProductCard = ({ product }) => {
  const { image, title, price, stars, reviews } = product

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={image} alt="crop top" fill className={styles.cardImg} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>&#x20A6; {price.toLocaleString('en-Us')}</p>
      <div className={styles.reviews}>
        <div className={styles.stars}>
          {Array(stars)
            .fill(null)
            .map((_, i) => (
              <BsStarFill key={i} />
            ))}
        </div>
        <p>({reviews} reviews)</p>
      </div>
    </div>
  )
}

export default ProductCard
