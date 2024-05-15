import styled from 'styled-components'
import logo from '../assets/logo.png'
import { FaBars, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { useProductsContext } from '../context/products_context'

const Navbar = () => {
  const { openSidebar } = useProductsContext()
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='tartas karina' className='nav-logo' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <a
          href='https://wa.me/34640213878'
          className='nav-contact'
          target='_blank'
          rel='noreferrer'
        >
          <FaWhatsapp />
        </a>
      </div>
    </NavContainer>
  )
}
export default Navbar

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;

  .nav-center {
    margin: 0 auto;
    width: 90vw;
    max-width: var(--max-width);
    padding: 1rem;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links,
  .nav-contact {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--grey-500);
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--primary-700);
        }
      }
    }

    .nav-contact {
      display: flex;
      font-size: 2rem;
      color: var(--grey-500);
      transition: all 0.3s ease;
      &:hover {
        color: var(--primary-500);
      }
    }
  }
`
