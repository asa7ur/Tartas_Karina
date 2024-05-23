import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h4>
          <Link to='/'>Inicio</Link>
          {product && <Link to='/productos'>/ Productos</Link>}/ {title}
        </h4>
      </div>
    </Wrapper>
  )
}
export default PageHero

const Wrapper = styled.section`
  background: var(--primary-950);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  color: var(--primary-100);

  h4 {
    margin: 0;
  }

  a {
    color: var(--primary-300);
    padding: 0.5rem;
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-100);
  }

  @media (max-width: 460px){
    min-height: 4em;
    
    h4{
      font-size: 0.75rem;
    }
  }
`
