import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Meta from '../components/Meta'
import Head from '../components/Header'
import SubHeader from '../components/SubHeader'

const Home = () => (
  <>
    <GlobalStyle />
    <Meta title="Home" />
    <Head />
    <SubHeader />
  </>
)

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: normal;
  }

  ::placeholder {
    color: #666;
  }

  ::selection {
    /* background-color: $accent; */
    color: #fff;
  }
  
  body {
    position: relative;
    min-width: 320px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.65;
    /* font-family: $default-font; */
    overflow-x: hidden;
    /* color: $text; */
    input,
    textarea {
      border: #666 1px solid;
      outline: none;
    }
  }

  a {
    text-decoration: none;
  }

  b,
  strong {
    font-weight: bold;
  }

  ul {
    list-style: none;
  }

  h2,
  ul {
    margin: 0;
  }

  ul > li {
    float: left;
  }
`

export default Home
