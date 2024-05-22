import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/heroBcg.jpg'

const Hero = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${heroBcg})` }}>
      <div className='content'>
        <h3>del obrador a tu casa</h3>
        <h1>Tartas Exquisitas</h1>
        <Link to='/productos' className='btn'>
          ir a Colección
        </Link>
      </div>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;
  height: calc(100vh - 4rem);
  width: 100%;
  background-size: cover;
  background-position: 100% 40%;

  .content {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1,
  h3 {
    color: var(--grey-100);
  }

  @media (min-width: 992px) {
    position: relative;
    height: calc(100vh - 6rem);
    width: 100%;
    background-size: cover;
    display: grid;
    place-items: center;

    .content {
      top: 45%;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1%.5;
    }
  }
`
