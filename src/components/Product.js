import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Product = ({ image, name, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <Link to={`/productos/${id}`} className='link'>
          <img src={image} alt={name} />
        </Link>
      </div>
      <h5>{name}</h5>
    </Wrapper>
  )
}

export default Product

const Wrapper = styled.article`
  .container {
    box-shadow: var(--shadow-3);
    transition: var(--transition);
  }

  .container:hover {
    box-shadow: none;
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  h5 {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
  }
`
