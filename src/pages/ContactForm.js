import styled from "styled-components"
import { PageHero, Form } from "../components"

const ContactForm = () => {
  return (
    <Wrapper>
      <PageHero title='contacto' />
      <Form />
    </Wrapper>
  )
}
export default ContactForm

const Wrapper = styled.main``