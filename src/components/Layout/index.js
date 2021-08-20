import * as React from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import GlobalStyles from "../../styles/global"

import * as S from "./styled"

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
