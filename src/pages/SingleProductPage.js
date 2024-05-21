import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Loading, Error, ProductImages, PageHero } from '../components'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'

const SingleProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    // eslint-disable-next-line
  }, [id])

  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       navigate('/')
  //     }, 3000)
  //   }
  //   // eslint-disable-next-line
  // }, [error])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const { name, description, ingredient, images } = product

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/productos' className='btn'>
          Volver a los productos
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Ingredients :</span>
              {ingredient}
            </p>
            <hr />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}
export default SingleProductPage

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`