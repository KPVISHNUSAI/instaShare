import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'

import {
  LogoLink,
  NavbarHeader,
  HeaderLogo,
  ActionsContainer,
  LogoutButton,
  HeaderText,
  LogoContainer,
  Input,
  SearchBar,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavbarHeader>
      <LogoContainer>
        <LogoLink to="/">
          <HeaderLogo
            src="https://res.cloudinary.com/dixxp9zcs/image/upload/v1712570216/logo_q1hd2x.png"
            alt="website logo"
          />
        </LogoLink>
        <HeaderText>Insta Share</HeaderText>
      </LogoContainer>
      <ActionsContainer>
        <SearchBar>
          <Input type="text" placeholder="Search..." />
        </SearchBar>
        <LogoLink to="/">
          <HeaderText
            style={{
              fontWeight: 500,
              marginRight: 30,
              marginLeft: 30,
              fontSize: 15,
              color: '#4094ef',
            }}
          >
            Home
          </HeaderText>
        </LogoLink>
        <LogoLink to="/">
          <HeaderText
            style={{
              fontWeight: 500,
              marginRight: 30,
              fontSize: 15,
              color: '#000',
            }}
          >
            Profile
          </HeaderText>
        </LogoLink>

        <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
      </ActionsContainer>
    </NavbarHeader>
  )
}

export default withRouter(Header)
