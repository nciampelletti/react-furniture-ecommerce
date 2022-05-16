import React from "react"
import styled from "styled-components"

const Testing = () => {
  return (
    <Wrapper>
      <h1> Hello world</h1>
      <p>hello people</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h1 {
    color: red;
  }
  p {
    color: blue;
  }
`

export default Testing
