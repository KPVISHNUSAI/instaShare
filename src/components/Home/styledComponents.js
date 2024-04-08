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
