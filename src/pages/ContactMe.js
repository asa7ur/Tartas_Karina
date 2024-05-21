import styled from "styled-components"
import { PageHero, Contact } from "../components"

const ContactMe = () => {
  return (
    <Wrapper>
      <PageHero title='contacto' />
      <Contact />
    </Wrapper>
  )
}
export default ContactMe

const Wrapper = styled.main``