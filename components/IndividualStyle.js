import React from 'react'
import styled from 'styled-components'

const individualStyle = () => (
  <IndividualStyle>
    <Title>
      <span>instawect</span>
      <br />
      Создай свой индивидуальный стиль
    </Title>
  </IndividualStyle>
)

export default individualStyle

const IndividualStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 212px;
  font-family: 'MullerLight', sans-serif;
  background-color: #93b0fe;
  background-image: url('/static/img/style_background.jpg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
`

const Title = styled.h2`
  font-weight: bold;
  color: white;
  text-align: center;
  & > span {
    font-family: 'MullerRegular', sans-serif;
    font-size: 3rem;
    text-transform: uppercase;
  }
`
