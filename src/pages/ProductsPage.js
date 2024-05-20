import styled from "styled-components"
import {PageHero, ProductList, Filters} from "../components"

const ProductsPage = () => {
  return (
    <main>
      <PageHero title='Productos'/>
      <Wrapper className='page'>
        <div className="section-center products">
          <Filters/>
          <ProductList/>
        </div>
      </Wrapper>
    </main>
  )
}
export default ProductsPage

const Wrapper = styled.div`
  .products{
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 992px){
    .products{
      grid-template-columns: 200px 1fr;
    }
  }

`