import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Product = ({ image, name, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <h4>{name}</h4>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--black);
    border-radius: var(--radius);
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary-500);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--white);
    }
  }

  .container:hover img {
    opacity: 0.5;
  }

  .container:hover .link {
    opacity: 1;
  }

  h4 {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    font-family: var(--bodyFont);
    font-weight: 400;
  }
`
export default Product
