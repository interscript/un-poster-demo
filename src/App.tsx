import React, { useState } from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from '@reach/router'
import { Helmet } from 'react-helmet'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import styled, { createGlobalStyle } from 'styled-components'
import logo from 'assets/symbol.svg'


export const primaryColor = '008075'


const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }

  body {
    font-family:
      'HelveticaNeue-Regular', 'Helvetica Neue Regular', 'Helvetica Neue',
      Helvetica, 'Lucida Grande', Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;

    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #${primaryColor};
  }
`


function App() {
  return (
    <Root>

      <GlobalStyle />

      <Helmet>
        <title>Interscript: Interoperable script conversion systems</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <LogoHeader>
        <LogoSymbol src={logo} alt="is" />
        <HeaderTitle />
      </LogoHeader>

      <SectionNav>
        <Link to="/">Home</Link>
        <Link to="/un">UN</Link>
        <Link to="/bgnpcgn">BGN/PCGN</Link>
        <Link to="/alalc">ALA-LC</Link>
        <Link to="/odni">ODNI</Link>
        <Link to="/ogc11122">OGC 11-122r1</Link>
      </SectionNav>

      <MainContent>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </MainContent>

    </Root>
  )
}

const HeaderTitle: React.FC<{}> = function() {
  const [showCompact, setShowCompact] = useState(false)

  useScrollPosition(({ currPos }) => {
    const logoHeight = 140
    const headerPadding = 20
    setShowCompact(currPos.y < (0 - logoHeight + headerPadding))
  })

  return (
    <>
      <ProjectTitleLarge>
        <h1 className="title"><b>Inter</b>script</h1>
        <p className="tagline">
          Interoperable<br />
          script&nbsp;conversion&nbsp;systems
        </p>
      </ProjectTitleLarge>

      {showCompact
        ? <ProjectTitleSmallWithLogo role="presentation">
            <h1 className="title"><b>Inter</b>script</h1>
            <LogoSymbolSmall src={logo} role="presentation" />
            <p className="tagline">
              Interoperable<br />
              script&nbsp;conversion&nbsp;systems
            </p>
          </ProjectTitleSmallWithLogo>
        : null}
    </>
  )
}

const LogoHeader = styled.header`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  z-index: 2;
`

const LogoSymbol = styled.img`
  height: 100px;
  width: 100px;
  margin: 20px;
`

const LogoSymbolSmall = styled(LogoSymbol)`
  height: 50px;
  width: 50px;
  margin: 0;
`

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;

  .title {
    font-size: 42px;
    line-height: 1;

    font-family:
      'HelveticaNeue-Thin', 'Helvetica Neue Thin', 'Helvetica Neue',
      Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 200;

    b {
      font-family:
        'HelveticaNeue-Bold', 'Helvetica Neue Bold', 'Helvetica Neue',
        Helvetica, Arial, 'Lucida Grande', sans-serif;
      font-weight: 700;
    }
  }
`

const ProjectTitleLarge = styled(ProjectTitle)`
  flex-flow: column nowrap;

  .tagline, .title {
    text-align: center;
    margin: 0;
    padding: 0;
    letter-spacing: -.02em;
  }

  .tagline {
    margin-top: .5em;
    line-height: 1.1;
  }

  @media screen and (min-width: 900px) {
    flex-flow: row-reverse nowrap;

    .tagline {
      text-align: right;
      margin: 0;
      margin-right: .5rem;
    }

    .title {
      text-align: left;
      margin: 0;
      margin-left: .5rem;
    }
  }
`

const ProjectTitleSmallWithLogo = styled(ProjectTitle)`
  flex-flow: row-reverse nowrap;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 10px 1.5rem;

  box-shadow: rgba(0, 0, 0, 0.2) 0 10px 30px -10px;

  z-index: 3;

  .tagline {
    text-align: right;
    margin: 0;
    margin-right: .75rem;
    display: none;
  }

  .title {
    text-align: left;
    margin: 0;
    margin-left: .5rem;
  }

  @media screen and (min-width: 900px) {
    left: unset;
    right: unset;
    transform: scale(0.9);
    border-radius: .5rem;

    .tagline {
      display: block;
    }
  }
`

const MainContent = styled.main`
  ul {
    padding-left: 1.25em;
  }

  dd {
    margin-left: 1.25em;
  }

  a {
    border-bottom: 1px dotted #008075;
  }

  @media screen and (min-width: 900px) {
    margin: 0 auto;
    width: 901px;
  }
`

const SectionNav = styled.nav`
  margin: 2rem 2rem 1rem 2rem;
  text-align: center;

  @media screen and (min-width: 900px) {
    text-align: center;
    margin: 2rem 0 1rem 1rem;
  }
  &>a {
    display: inline-block;
    margin-right: 1em;

    white-space: nowrap;

    &, &:link, &:visited {
      border-bottom: none;
    }

    @media screen and (min-width: 900px) {
      &::before {
        content: "•";
        display: inline;
        margin: 0 1em 0 0;
      }
    }
  }
`

export default App
