import styled from 'styled-components';
import louvre from '../../../assets/Contact/louvre.avif'

const Section = styled.li`
  position: absolute;
  list-style: none;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-in-out, visibility 0s 0.4s;

  &.is-active {
    opacity: 1;
    visibility: visible;
    transition: opacity .4s ease-in-out .4s;
    list-style: none;
  }
`;

const ContactContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${louvre});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(12,12,12,1) 0%, rgba(12,12,12,0.8) 25%, rgba(12,12,12,0.3) 50%, rgba(12,12,12,0.6) 75%, rgba(12,12,12,0.8) 100%),
            linear-gradient(to left, rgba(12,12,12,0.8) 0%, rgba(12,12,12,0.6) 25%, rgba(12,12,12,0.3) 50%, rgba(12,12,12,0.6) 75%, rgba(12,12,12,0.8) 100%);
    z-index: -1;
  }
`;

const ContactLockup = styled.div`
  position: relative;
  display: flex;
  width: 900px;
  max-width: 75%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
`;

const ModalContainer = styled.div`
  padding: 45px 45px;
  text-align: center;
  background-color: black;
  box-shadow: 0 0 30px 0 rgba(0,0,0,.75);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalInformation = styled.div`
  h2, p, a {
    display: block;
    margin: 14px 0;
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  h2 {
    margin-top: 0;
  }
`;

const ModalOptionsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ModalOptionItem = styled.li`
  width: 130px;
  margin: 0 auto 25px auto;
  background-color: #eab308;
`;

const ModalOptionLink = styled.a`
  display: block;
  width: 100%;
  padding: 8px 0;
  text-decoration: none;
  color: white;
  font-weight: 700;
`;

function ContactSection() {
  return (
    <Section className="is-active">
      <ContactContainer>
        <ContactLockup>
          <ModalContainer>
            <ModalInformation>
              <h2>My Contacts</h2>
              <a href="mailto:VasaPofficial@gmail.com">VasaPofficial@gmail.com</a>
              <p>+48 12 628 75 60</p>
            </ModalInformation>
            <ModalOptionsList>
              <ModalOptionItem>
                <ModalOptionLink href="#0">LinkedIn</ModalOptionLink>
              </ModalOptionItem>
              <ModalOptionItem>
                <ModalOptionLink href="#0">GitHub</ModalOptionLink>
              </ModalOptionItem>
              <ModalOptionItem>
                <ModalOptionLink href="#0">Upwork</ModalOptionLink>
              </ModalOptionItem>
            </ModalOptionsList>
          </ModalContainer>
        </ContactLockup>
      </ContactContainer>
    </Section>
  );
}

export default ContactSection;
