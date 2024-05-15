import styled from 'styled-components'
import { services } from '../utils/constants'
const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h2>Nuestros servicios</h2>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className='service' key={id}>
                <img src={icon} alt={title} />
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Services

const Wrapper = styled.section`
  padding: 5rem 0;
  background: var(--primary-200);

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--primary-600);
  }

  h4 {
    color: var(--primary-600);
  }

  .services-center {
    margin-top: 3rem;
    display: grid;
    gap: 2.5rem;
  }

  .service {
    background: var(--white);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      margin-bottom: 0;
      line-height: 1.8;
      color: var(--black);
    }
  }

  img {
    width: 100px;
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
