import { Container } from '@components/styled/Container'
import ProductCard from './ProductCard'
import styles from './Products.module.css'
import top from '@public/images/top.jpg'
import whiteShirt from '@public/images/white-shirt.jpg'
import orangeShirt from '@public/images/orange-shirt.jpg'
import shirtRack from '@public/images/shirt-rack.jpg'

const products = [
  {
    image: top,
    title: 'Blue Sekari Top',
    price: 10000,
    stars: 5,
    reviews: 324,
  },
  {
    image: whiteShirt,
    title: 'Vougue White Shirt',
    price: 4000,
    stars: 5,
    reviews: 324,
  },
  {
    image: orangeShirt,
    title: 'Casual Orange shirt',
    price: 2500,
    stars: 5,
    reviews: 324,
  },
  {
    image: shirtRack,
    title: 'Quality T-shirts',
    price: 5000,
    stars: 5,
    reviews: 324,
  },
]

const Products = () => {
  return (
    <div className={styles.products}>
      <Container>
        <form className={styles.tabs}>
          <input type="radio" name="category" value="all" defaultChecked />
          <input type="radio" name="category" value="men products" />
          <input type="radio" name="category" value="women products" />
          <input type="radio" name="category" value="accessories" />
        </form>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Products
