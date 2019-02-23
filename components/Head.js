import React from 'react'
import styled from 'styled-components'

const Head = () => (
  <Header>
    <Company>
      <Logo src="/static/img/logo.png" alt="логотип Instawect" />
      <CompanyName>Instawect</CompanyName>
    </Company>
    <Menu>
      <ul>
        <MenuItem>
          <a href="#main">Главная</a>
        </MenuItem>
        <MenuItem>
          <a href="#about-us">О нас</a>
        </MenuItem>
        <MenuItem>
          <a href="#guarantees">Гарантии</a>
        </MenuItem>
        <MenuItem>
          <a href="#price">Цена</a>
        </MenuItem>
        <MenuItem>
          <a href="#contacts">Контакты</a>
        </MenuItem>
      </ul>
    </Menu>
    {/* <section id="main" class="main">
      <div class="main__tagline">
        <h2 class="main__title">
          Привлекаем клиентов
          <br /> Добиваемся результатов
        </h2>
        <p class="main__content">
          <span>Instawect</span> - ваш первый шаг к успешному профилю
        </p>
        <a class="main__more-btn" href="#how-it-works">
          Подробнее
        </a>
      </div>
      <div class="main__phone-wrapper">
        <img class="main__phone" src="./img/main_background.png" alt="" />
      </div>
    </section> */}
  </Header>
)

export default Head

const Header = styled.header`
  height: 80px;
  width: 100vw;
  padding: 0 30px;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.4);
  background-color: #93b0fe;
  background-image: url('/static/img/header_background.jpg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
`

const Company = styled.div`
  display: flex;
  align-items: center;
`

const CompanyName = styled.h2`
  color: white;
  text-transform: uppercase;
  margin-left: 10px;
`

const Logo = styled.img`
  width: 52px;
  height: 50px;
`

const Menu = styled.nav`
  width: 100%;
  & > ul {
    display: flex;
    justify-content: flex-end;
    align-content: center;
  }
`

const MenuItem = styled.li`
  margin-right: 4%;
  & a {
    color: white;
    font-size: 1.25rem;
    font-family: 'MullerLight', sans-serif;
  }
  & a:focus,
  a:hover {
    outline: none;
    text-decoration: underline;
  }
`
