import { fonts, colors, size } from './constants'

export const theme = {
  axis: {
    ticks: {
      line: { fill: colors.gray },
      text: {
        fill: colors.gray,
        fontSize: size.textContent,
        fontFamily: fonts.content
      }
    }
  },
  grid: {
    line: { stroke: colors.gray, strokeDasharray: '1 2', strokeOpacity: 0.4 }
  },
  tooltip: {
    container: {
      background: colors.gray,
      color: colors.dark,
      fontSize: size.textContent,
      borderRadius: 0,
      boxShadow: '9px 9px 0 rgba(0, 0, 0, 0.15)'
    }
  },
  labels: {
    text: {
      fill: colors.light,
      fontSize: size.textContent,
      fontWeight: 500,
      fontFamily: fonts.content,
      textShadow: '0px 2px 3px rgba(0,0,0,0.35)'
    }
  }
}
