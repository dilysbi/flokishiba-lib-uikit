import React, { useState } from 'react'
import styled from 'styled-components'

import Flex from '../../components/Box/Flex'
import { useMatchBreakpoints } from '../../hooks'
import Logo from './components/Logo'
import UserBlock from './components/UserBlock'
import { NavProps } from './types'
import Avatar from './components/Avatar'
import { MENU_HEIGHT } from './config'
import IconSetting from '../../assets/images/setting.svg'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`

const Inner = styled.div<{ isPushed: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`

const BoxBSC = styled.div<{ type: string }>`
  padding: 5px 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  color: #954306;
  background: rgba(197, 131, 95, 0.5);
`

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = isXl === false
  const [isPushed, setIsPushed] = useState(!isMobile)

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === 'Home')

  return (
    <Wrapper>
      {/* Header top */}
      <StyledNav>
        <Logo
          isMobile={isMobile}
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? '/'}
        />
        <Flex>
          <BoxBSC type="1">BSC</BoxBSC>
          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
          <BoxBSC type="2">
            <img src={IconSetting} width={20} alt="setting" />
          </BoxBSC>
        </Flex>
      </StyledNav>
      {/* Sidebar and content */}
      <BodyWrapper>
        <Inner isPushed={isPushed}>{children}</Inner>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Menu
