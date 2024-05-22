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
    margin-bottom: 2rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .filter-btn {
      display: none;
    }

    .products-container {
      margin-bottom: 0;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
