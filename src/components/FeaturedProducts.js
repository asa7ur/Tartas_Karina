import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>descubre nuestras tartas</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 4).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to='/productos' className='btn'>
        ver todas
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--grey-950);
  .featured {
    margin: 4rem auto 2rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 300px;
    }
  }

  .btn {
    display: block;
    max-width: 200px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 992px) {
    .featured {
      grid-template-columns: repeat(4, minmax(auto, 1fr));
    }
  }
`

export default FeaturedProducts
