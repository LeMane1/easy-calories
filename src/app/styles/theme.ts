export const mainColor = '#2bcb3d'
export const textColor = '#181818'
export const layoutLightBg = '#f8f8f8'

export const themeData = {
  token: {
    colorPrimary: mainColor,
    colorLink: textColor,
    borderRadius: 8
  },
  components: {
    Button: {
      colorPrimary: mainColor,
    },
    Layout: {
      headerPadding: '0',
      headerBg: 'transparent',
      bodyBg: layoutLightBg,
      footerBg: layoutLightBg,
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0
    }
  },
}