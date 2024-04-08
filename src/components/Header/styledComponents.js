// eslint-disable-next-line import/no-extraneous-dependencies
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

const size = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

const media = {
  mobile: (...args) => css`
    @media (max-width: ${size.mobile}) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${size.mobile}) and (max-width: ${size.tablet}) {
      ${css(...args)}
    }
  `,
  laptop: (...args) => css`
    @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${size.laptop}) {
      ${css(...args)}
    }
  `,
}

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  height: 64px;
  width: 100%;
  background-color: ${props => props.bgColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeaderLogo = styled.img`
  width: 59px;
  height: 30px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    width: 59px;
    height: 30px;
  }
`

export const HeaderText = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  margin-right: 10px;
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const LogoutButton = styled.button`
  background-color: #4094ef;
  height: 40px;
  width: 130px;
  color: #fff;
  border-radius: 7px;
  border-color: transparent;
`

export const Input = styled.input`
  flex: 1;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 6px;
  padding: 8px 16px;
`
