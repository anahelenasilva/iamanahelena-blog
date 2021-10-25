import styled from "styled-components"
import media from "styled-media-query"

export const AboutWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const AboutTitle = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 0.5rem;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const AboutDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 0.5rem auto 0.5rem;
`
