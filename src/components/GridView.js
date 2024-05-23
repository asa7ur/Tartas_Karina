import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { useProductsContext } from '../context/products_context'

const GridView = ({ products }) => {
  const { openFilter } = useProductsContext()
  return (
    <Wrapper>
      <button type='button' className='filter-btn btn' onClick={openFilter}>
        Filtrar búsqueda
      </button>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}

export default GridView

const Wrapper = styled.section`
  .filter-btn {
    margin-bottom: 2rem;
  }

  img {
    height: 200px;
  }

  .products-container {
    display: grid;
    margin-bottom: 4rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    .filter-btn {
      display: none;
    }

    .products-container {
      margin-bottom: 0;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 460px) {
    img {
      height: 150px;
    }

    .products-container {
      gap: 1.5rem 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
