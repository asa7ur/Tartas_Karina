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

export default FeaturedProducts

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .featured {
    margin: 4rem auto 2rem auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 2rem 1.5rem;
    img {
      height: 250px;
    }
  }

  .btn {
    margin: auto;
  }

  @media (min-width: 1024px) {
    .featured {
      grid-template-columns: repeat(4, minmax(auto, 1fr));
    }
  }

  @media (max-width: 460px) {
    .featured {
      margin: 2rem auto 2rem auto;
      grid-template-columns: repeat(2, minmax(auto, 1fr));
      gap: 1.5rem 1rem;
      img {
        height: 150px;
      }
    }
  }
`

