// eslint-disable-next-line import/no-extraneous-dependencies
import styled, {css} from 'styled-components'

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

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

export const LoginLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobile`
    display: none;
  `}

  ${media.tablet`
    display: none;
  `}
`

export const LandingImage = styled.img`
  width: 582px;
  height: 373px;
  align-self: center;

  ${media.tablet`
    width: 70%;
    height: auto;
  `}

  ${media.laptop`
    width: 70%;
  `}

  ${media.desktop`
    width: 70%;
  `}
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 456px;

  ${media.tablet`
    width: 80%;
  `}

  ${media.laptop`
    width: 30%;
  `}

  ${media.desktop`
    width: 30%;
  `}
`

export const LoginLogo = styled.img`
  width: 82px;
  height: 42px;
  align-self: center;
  margin-bottom: 15px;
`

export const LogoText = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #4094ef;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  height: 40px;
  color: #ffffff;
  margin-top: 20px;
`

export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`

export const UserInput = styled.input`
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
