import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues} from '../utils/helpers'

const Filters = () => {
  const {
    filters: {
      text,
      category,
      ingredient
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const ingredients = getUniqueValues(all_products, 'ingredient')
  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              value={text}
              placeholder='Buscar'
              onChange={updateFilters}
              className='search-input'
            />
          </div>
          {/* end of search input */}

          {/* categories */}
          <div className='form-control'>
            <h5>Categorías</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      category === c.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of categories */}

          {/* ingredients */}
          <div className='form-control'>
            <h5>Ingredientes</h5>
            <div>
              {ingredients.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='ingredient'
                    className={`${
                      ingredient === c.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of ingredients */}

        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          Borrar
        </button>
      </div>
    </Wrapper>
  )
}

export default Filters

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .search-input {
    padding: 0.5rem;
    background: var(--grey-400);
    color: var(--grey-100);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }

  .search-input::placeholder {
    text-transform: capitalize;
    color: var(--grey-100);
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--grey-500);
    cursor: pointer;
  }

  .active {
    border-color: var(--grey-500);
  }

  .company {
    background: var(--grey-950);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }

  .all-btn .active {
    text-decoration: underline;
  }

  .clear-btn {
    background: var(--red-dark);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  
  @media (min-width: 992px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

