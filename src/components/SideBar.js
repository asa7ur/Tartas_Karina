import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaTimes} from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} alt='tartas karina' className='nav-logo' />
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </SidebarContainer>
  )
}

export default SideBar

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
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

  .sidebar {
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

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  /* @media screen and (min-width: 1024px) {
    .sidebar {
      display: none;
    }
  } */

  @media (max-width: 460px){
    .filter-header {
      padding: 1rem 1.5rem;
    }

    .close-btn {
      font-size: 1.5rem;
    }
  }
`
