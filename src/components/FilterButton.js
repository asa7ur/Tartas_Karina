import logo from '../assets/logo.png'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { useFilterContext } from '../context/filter_context'
import { useProductsContext } from '../context/products_context'
import { getUniqueValues } from '../utils/helpers'

const FilterButton = () => {
  const { isFilterOpen, closeFilter } = useProductsContext()
  const {
    filters: { text, category, ingredient },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const ingredients = getUniqueValues(all_products, 'ingredient')
  return (
    <FilterContainer>
      <aside className={`${isFilterOpen ? 'filter show-filter' : 'filter'}`}>
        <div className='filter-header'>
          <img src={logo} alt='tartas karina' className='nav-logo' />
          <button className='close-btn' onClick={closeFilter}>
            <FaTimes />
          </button>
        </div>

        <div className='content'>
          <form onSubmit={(e) => e.preventDefault()} className='form'>
            {/* search input */}
            <div className='form-control search'>
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

            <button type='button' className='clear-btn' onClick={clearFilters}>
              Borrar
            </button>
          </form>
        </div>
      </aside>
    </FilterContainer>
  )
}

export default FilterButton

const FilterContainer = styled.div`
  text-align: center;

  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    transition: var(--transition);
    cursor: pointer;
    color: var(--red-dark);
    margin-top: 0.2rem;
  }

  .close-btn:hover {
    color: var(--red-light);
  }

  .nav-logo {
    justify-self: center;
    height: 45px;
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--grey-500);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    color: var(--primary-500);
  }

  .filter {
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-filter {
    transform: translate(0);
    z-index: 999;
  }

  .content {
    display: block;
    position: sticky;
    padding: 1rem ;
  }

  .form {
    display: block;
  }

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .search-input {
    display: block;
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
    display: block;
    background: var(--red-dark);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }

  @media (min-width: 1024px) {
    display: none;

    .filter {
      display: none;
    }
  }
`
