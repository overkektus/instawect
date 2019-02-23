import React from 'react'
import styled from 'styled-components'

import { SectionWrapper } from './common'

const howItWork = () => (
  <HowItWork id="how-it-works">
    <SectionWrapper>
      <Title>Как мы работаем</Title>
      <ItemContainer>
        <Row>
          <Item>
            <Img src="/static/img/individual-style_icon.png" alt="" />
            <ItemTitle>Создаём индивидуальный стиль</ItemTitle>
            <ItemText>
              Создаем ваш индивидуальный стиль для Instagram с учётом вашего логотипа и фирменных цветов.
            </ItemText>
          </Item>
          <Item>
            <Img src="/static/img/our-work_icon.png" alt="" />
            <ItemTitle>Всё делаем сами, ваше дело отдыхать</ItemTitle>
            <ItemText>
              Наши дизайнеры займутся оформлением и созданием индивидуального стиля, наши тех.сотрудники займутся
              раскруткой аккаунта, вам остаётся только отдыхать.
            </ItemText>
          </Item>
          <Item>
            <Img src="/static/img/aud_icon.png" alt="" />
            <ItemTitle>Найдём вашу целевую аудиторию</ItemTitle>
            <ItemText>Мы работаем только с вашей целевой аудиторией, никаких ботов и коммерческих аккаунтов</ItemText>
          </Item>
        </Row>
        <Row>
          <Item>
            <Img src="/static/img/info_icon.png" alt="" />
            <ItemTitle>Предоставляем важную информацию</ItemTitle>
            <ItemText>
              Мы проверяем все комментарии и Direct сообщения. Фильтруем для вас важные сообщения и предоставляем их
              Вам.
            </ItemText>
          </Item>
          <Item>
            <Img src="/static/img/planning_icon.png" alt="" />
            <ItemTitle>Заранее планируем свои действия</ItemTitle>
            <ItemText>Мы делаем нашу работу с особой точностью. При работе с клиентом учитываются все мелочи.</ItemText>
          </Item>
          <Item>
            <Img src="/static/img/security_icon.png" alt="" />
            <ItemTitle>Обеспечиваем высокую безопасность</ItemTitle>
            <ItemText>Наши специалисты знают и соблюдают все технические требования при работе с Instagram.</ItemText>
          </Item>
        </Row>
      </ItemContainer>
    </SectionWrapper>
  </HowItWork>
)

export default howItWork

const HowItWork = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 1rem 0%;
  background-color: #93b0fe;
  background-image: url('/static/img/how-it-work_background.jpg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
`

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: normal;
  color: white;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: stretch;
`

const Row = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
`

const Item = styled.div`
  margin: 0 8px;
  width: 335px;
  text-align: center;
  color: white;
`

const Img = styled.img`
  height: 60px;
`

const ItemTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: normal;
  margin-bottom: 10px;
`

const ItemText = styled.p`
  line-height: 24px;
  font-size: 1.1rem;
  font-family: 'MullerLight', sans-serif;
`
