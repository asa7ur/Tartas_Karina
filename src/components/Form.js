import styled from 'styled-components'
import { socials } from '../utils/constants'
import { useFormContext } from '../context/form_context'

const Form = () => {
  const { state, handleChange, handleSubmit, resultRef } = useFormContext()
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='content'>
          <div>
            <h1>¿Tienes dudas?</h1>
            <p>
              Si quieres preguntarnos más información no dudes en escribirnos y
              estaremos encantadas de ofrecerte la mejor experiencia Tartas
              Karina. Además tenemos un apartado de preguntas frecuentes para
              que resuelvas tus dudas aún más fácilmente.
            </p>
            <div className='links'>
              {socials.map((social) => {
                const { id, icon, url, text } = social
                return (
                  <a
                    key={id}
                    href={url}
                    className='nav-contact'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {icon}
                    {text}
                  </a>
                )
              })}
            </div>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <h2>Escríbenos</h2>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                className='user_name'
                value={state.name}
                onChange={handleChange}
                placeholder='Nombre'
                required
              />
              <input
                type='email'
                name='email'
                className='user_email'
                value={state.email}
                onChange={handleChange}
                placeholder='Correo electrónico'
                required
              />
              <input
                type='text'
                name='subject'
                className='subject'
                value={state.subject}
                onChange={handleChange}
                placeholder='Motivo de consulta'
                required
              />
              <textarea
                name='message'
                className='message'
                value={state.message}
                onChange={handleChange}
                placeholder='Tu mensaje'
                required
              ></textarea>
            </div>
            <div className='form-group result-container'>
              <button
                type='submit'
                className='submit-btn btn'
                disabled={state.loading}
              >
                {state.loading ? <span className='sending'></span> : 'Send'}
              </button>
              <div className='result' ref={resultRef} style={{ opacity: 0 }}>
                {state.result}
              </div>
            </div>
            {/* <div className='form-group'>
                {form.map((line) => {
                  const { n, type, id, cl, placeholder } = line
                  return (
                    <input
                      key={n}
                      type={type}
                      className={cl}
                      id={id}
                      placeholder={placeholder}
                    />
                  )
                })}
                <textarea
                  id='message'
                  className='message'
                  spellCheck='false'
                  placeholder='Tu mensaje'
                ></textarea>
              </div>
  
              <div className='form-group result-container'>
                <button type='submit' className='submit-btn btn'>
                  Enviar mensaje
                </button>
                <p className='result'>Enviado con exito!</p>
              </div> */}
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Form

const Wrapper = styled.section`
  padding: 2rem 0 5rem 0;

  h3 {
    text-transform: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    color: var(--grey-500);
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .links a {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .links .icon {
    color: var(--primary-500);
    font-size: 2rem;
  }

  .links a {
    color: var(--grey-500);
    font-size: 1.2rem;
  }

  .form {
    max-width: var(--fixed-width);
    background-color: var(--primary-200);
    border-radius: 25px;
    box-shadow: var(--shadow-3);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }

  .form-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .form-group input,
  .form-group textarea {
    background-color: var(--grey-100);
    width: 100%;
    padding: var(--padding);
    margin-bottom: 1.5rem;
    border: 1px solid var(--grey-200);
    border-radius: 25px;
  }

  .form-group textarea {
    height: 150px;
    resize: none;
  }

  input {
    font-family: var(--bodyFont);
    font-size: 1rem;
  }

  .result-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }

  .result-container p {
    opacity: 0;
    transition: all 0.3s ease;
    color: var(--primary-950);
  }

  ::placeholder {
    font-size: 0.85rem;
    font-family: var(--bodyFont);
    color: var(--grey-400);
    text-transform: uppercase;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .sending {
    display: inline-block;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    border: 3px solid var(--grey-400);
    border-top-color: var(--primary-500);
    animation: spinner 0.6s linear infinite;
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
      font-size: 1.2rem;
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      margin-top: 2rem;
    }
  }
`
