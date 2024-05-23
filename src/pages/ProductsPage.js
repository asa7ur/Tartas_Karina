import React from 'react'
import styled from 'styled-components'
import { Filters, FilterButton, ProductList, Sort, PageHero } from '../components'
const ProductsPage = () => {
  return (
    <main>
      <PageHero title='productos' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <FilterButton/>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default ProductsPage

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 1rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products {
      margin: 4rem auto;
      grid-template-columns: 200px 1fr;
    }
  }
`

