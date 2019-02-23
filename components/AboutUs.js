import React from 'react'
import styled from 'styled-components'

const aboutUs = () => (
  <AboutUs id="about-us">
    <Title>
      Instawect
      <br />
      <span>не накручивает подписчиков</span>
    </Title>
    <Content>
      Заказ инстаграм аккаунта "под ключ" - это не один из методов черной оптимизации, когда у продвигаемого ресурса
      искусственно повышаются какие-либо параметры.
    </Content>
    <Content>
      Мы проводим комплекс маркетинговых мероприятий, целями которых являются увеличение продаж товара и оказываемых
      вами услуг, увеличение узнаваемости вашей компании, привлечение новых клиентов.
    </Content>
    <ContactLink href="#contacts">Связаться</ContactLink>
  </AboutUs>
)

export default aboutUs

const AboutUs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 10% 14% 0 10%;
  background-color: white;
`

const Title = styled.h2`
  margin-bottom: 4%;
  line-height: 1.2;
  font-size: 4rem;
  text-align: center;
  text-transform: uppercase;
  & > span {
    font-size: 2.5rem;
    font-family: 'MullerLight', sans-serif;
    font-weight: 200;
    text-transform: lowercase;
  }
`

const Content = styled.p`
  font-size: 1.2rem;
  font-family: 'MullerLight', sans-serif;
`

const ContactLink = styled.a`
  height: 70px;
  width: 192px;
  margin-top: 5%;
  padding: 20px 57px;
  font-family: 'MullerLight', sans-serif;
  color: #84c2fd !important;
  text-decoration: none !important;
  background-color: transparent;
  border: 2px solid #84c2fd;
  border-radius: 10px;
  transition: all 0.15s ease-out;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:hover {
    color: white !important;
    background-color: #84c2fd;
    border: 2px solid transparent;
    transition: all 0.15s ease-out;
  }

  &:focus {
    color: white;
    outline: none;
    border: 2px solid #be8dff;
    transform: translateY(-5px);
    transition: all 0.15s ease-out;
  }
`
