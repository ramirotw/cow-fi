import { transparentize } from 'polished'
import { css } from 'styled-components'

export const Color = {
  white: '#F6F6F6',
  black: '#000000',
  orange: '#ED6834',
  border: transparentize(0.75, '#979797'),
  borderGradient: `linear-gradient(to bottom, ${transparentize(0.75, '#979797')}, ${transparentize(1, '#979797')})`,
  darkBlue: '#052B65',
  darkBlue2: '#0D3673',
  darkBlue3: '#042a63',
  darkBlue4: '#042456',
  lightBlue: '#CAE9FF',
  text1: '#405A82',
  text2: '#95BAEF',
  gradient: "linear-gradient(45deg,#FFE7E0 0%,#F8DBF4 20%,#C4DDFF 60%,#CAE9FF 100%)",
  gradientMesh: css`
    background-color:hsla(142,0%,100%,1);
    background-image:
    radial-gradient(at 5% 70%, hsla(204,100%,89%,1) 0px, transparent 50%),
    radial-gradient(at 47% 40%, hsla(214,100%,88%,1) 0px, transparent 50%),
    radial-gradient(at 73% 3%, hsla(308,67%,91%,1) 0px, transparent 50%),
    radial-gradient(at 44% 13%, hsla(13,100%,93%,1) 0px, transparent 50%),
    radial-gradient(at 61% 70%, hsla(204,100%,89%,1) 0px, transparent 50%),
    radial-gradient(at 32% 81%, hsla(204,100%,89%,1) 0px, transparent 50%),
    radial-gradient(at 19% 39%, hsla(204,100%,89%,1) 0px, transparent 50%);
  `
}

export const Defaults = {
  borderRadius: '1.6rem',
  pageMaxWidth: '126rem',
  boxShadow: `0 2.4rem 2.4rem ${Color.darkBlue3}`
}

export const Font = {
  default: "'Averta', 'Helvetica Neue', Helvetica, sans-serif",
  arial: "Arial, Helvetica, sans-serif",
  sizeDefault: '1.6rem',
  weightLight: 300,
  weightNormal: 400,
  weightMedium: 600,
  weightBold: 900,
}

export const Media = {
  tinyScreen: '320px',
  xSmallScreen: '430px',
  smallScreen: '736px',
  smallScreenUp: '737px',
  mediumScreenSmall: '992px',
  mediumEnd: '1024px',
  desktopScreen: '1200px',
  desktopScreenLarge: '1400px',
  get tinyDown(): string {
    return `@media only screen and (max-width : ${this.tinyScreen})`
  },
  get xSmallDown(): string {
    return `@media only screen and (max-width : ${this.xSmallScreen})`
  },
  get mobile(): string {
    return `@media only screen and (max-width : ${this.smallScreen})`
  },
  get smallUp(): string {
    return `@media only screen and (min-width : ${this.smallScreen})`
  },
  get mediumUp(): string {
    return `@media only screen and (min-width : ${this.mediumScreenSmall})`
  },
  get mediumDown(): string {
    return `@media only screen and (max-width : ${this.mediumEnd})`
  },
  get mediumOnly(): string {
    return `@media only screen and (min-width : ${this.smallScreenUp}) and (max-width : ${this.mediumEnd})`
  },
  get desktopOnly(): string {
    return `@media only screen and (min-width : ${this.mediumEnd}) and (max-width : ${this.desktopScreen})`
  },
  get desktopDown(): string {
    return `@media only screen and (max-width : ${this.desktopScreen})`
  },
  get desktop(): string {
    return `@media only screen and (min-width : ${this.desktopScreen})`
  },
  get desktopLarge(): string {
    return `@media only screen and (min-width: ${this.desktopScreenLarge})`
  },
  get desktopLargeDown(): string {
    return `@media only screen and (max-width: ${this.desktopScreenLarge})`
  },
  get tabletPortrait(): string {
    return `@media (min-device-width: ${this.smallScreenUp}) and (max-device-width: ${this.mediumEnd}) and (orientation: portrait)`
  },
  get tabletLandscape(): string {
    return `@media (min-device-width: ${this.smallScreenUp}) and (max-device-width: ${this.mediumEnd}) and (orientation: landscape)`
  },
  get tablet(): string {
    return `@media (min-width: ${this.smallScreenUp}) and (max-width: ${this.mediumEnd}), ${this.tabletPortrait}, ${this.tabletLandscape}`
  },
  get tabletNoPortrait(): string {
    return `@media (min-width: ${this.smallScreenUp}) and (max-width: ${this.mediumEnd}), ${this.tabletLandscape}`
  },
  get tabletSmall(): string {
    return `@media (min-width: ${this.smallScreenUp}) and (max-width: ${this.mediumScreenSmall})`
  },
}
