import React from 'react'
import styled from 'styled-components'

const subHeader = () => (
  <SubHeader id="main">
    <div>
      <Title>
        Привлекаем клиентов
        <br /> Добиваемся результатов
      </Title>
      <Content>
        <span>Instawect</span> - ваш первый шаг к успешному профилю
      </Content>
      <MoreLink href="#how-it-works">Подробнее</MoreLink>
    </div>
    <PhoneImgWrapper>
      <PhoneImg src="/static/img/main_background.png" alt="мобильный телефон" />
    </PhoneImgWrapper>
  </SubHeader>
)

export default subHeader

const SubHeader = styled.section`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 80px);
  margin-top: 80px;
  padding: 15% 14% 0 14%;
  font-family: 'MullerLight', sans-serif;
  background-color: white;
  background-image: url('/static/img/main_background.jpg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
`

const Title = styled.h2`
  margin-bottom: 2%;
  font-size: 2.2rem;
`

const Content = styled.p`
  margin-bottom: 6%;
  font-size: 1.2rem;
  & > span {
    text-transform: uppercase;
  }
`

const PhoneImg = styled.img`
  height: 50vh;
  width: 50vh;
`

const PhoneImgWrapper = styled.div`
  align-self: flex-end;
`

const MoreLink = styled.a`
  display: block;
  width: 190px;
  color: white;
  padding: 20px 50px;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: #84c2fd;
  transition: all 0.15s ease-out;
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.4);

  &:hover {
    text-decoration: none;
    color: white;
    border: 2px solid #84c2fd;
    background-color: rgb(132, 194, 253, 0.3);
  }

  &:focus {
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  &:active {
    transform: translateY(5px);
  }
`
