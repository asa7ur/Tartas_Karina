import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          onClick={setGridView}
          className={`${grid_view ? 'active' : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`${!grid_view ? 'active' : null}`}
        >
          <BsList />
        </button>
      </div>
      <p>
        {products.length} {`${products.length > 1 ? 'productos encontrados' : 'producto encontrado'}`}
      </p>
      <hr />
      <form>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className='sort-input'
        >
          <option value='name-a'>nombre (a - z)</option>
          <option value='name-z'>nombre (z - a)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: none;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  p {
    text-transform: capitalize;
    margin-bottom: 0;
    color: var(--grey-400);
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--black);
      color: var(--black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--black);
      color: var(--white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }

  label {
    font-size: 1rem;
    text-transform: capitalize;
  }

  @media (min-width: 992px) {
    display: grid;
  }
`

export default Sort
