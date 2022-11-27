import Link from 'next/link'
import Header from '@components/header/Header'
import Featured from '@components/featured/Featured'
import Services from '@components/services/Services'
import Products from '@components/products/Products'
import Trending from '@components/trending/Trending'
import Footer from '@components/footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Featured />
        <Services />
        <Products />
        <Trending />
        <Footer />
      </main>
    </>
  )
}
