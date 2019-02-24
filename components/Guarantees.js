import React from 'react'
import styled from 'styled-components'

import { SectionWrapper } from './common'

const guarantees = () => (
  <Guarantees id="guarantees">
    <SectionWrapper>
      <Title>Гарантии?</Title>
      <ItemContainer>
        <Item>
          <ItemTitle>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"/></Icon>
            Живые подписчики
          </ItemTitle>
          <ItemText>
            Нельзя накрутить живых подписчиков. Они такие же живые люди, как и вы. Их невозможно заставить купить товар,
            если они не хотят этого делать. Для этого мы и предоставляем услуги нашего сервиса, чтобы вызвать у них
            желание купить ваш товар или воспользоваться вашими услугами.
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>
            <Icon fill="#84c2fd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></Icon>
            Гарантируем
          </ItemTitle>
          <ItemText>
            Вызвать желание купить ваш товар или воспользоваться вашими услугами - вот наша главная задача. Никто не
            можем гарантировать вам высокий уровень продаж, но мы гарантируем, что донесём информацию о вашем продукте и
            оказываемых вами услугах до потребителя.
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"/></Icon>
            Много или мало?
          </ItemTitle>
          <ItemText>
            Никто не может гарантировать вам определённый уровень продаж. Уровень продаж определяется множеством
            факторов, от предоставляемых вами продуктов или услуг, до описания на товара на сайте.
          </ItemText>
        </Item>
      </ItemContainer>
    </SectionWrapper>
  </Guarantees>
)

export default guarantees

const Guarantees = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 2% 0;
  background-image: url('/static/img/guarantees_background-right-top.png'),
    url('/static/img/guarantees_background-left-bottom.png');
  background-position: right top, left bottom;
  background-repeat: no-repeat;
`

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3%;
`

const ItemContainer = styled.div`
  padding: 0 3%;
  display: flex;
`

const Item = styled.div`
  width: 30%;
  margin: 0 3%;
  text-align: center;
`

const Icon = styled.svg`
  height: 1.7rem;
  margin-right: 5px;
  fill: ${props => props.fill || '#be8dff'};
`

const ItemTitle = styled.h3`
  margin-bottom: 25px;
  font-size: 1.9rem;
  font-weight: normal;
`

const ItemText = styled.p`
  line-height: 26px;
  font-size: 1.2rem;
  font-family: 'MullerLight', sans-serif;
`
