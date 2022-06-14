import { colors } from "../../theme/colors"
import { spacing } from "../../theme/spacing"

export const presets = {
  default: { fontSize: 18, color: colors.black },
  h1: {
    fontSize: 28,
    color: colors.white,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 26,
    color: colors.white,
    fontWeight: 'bold'
  },
  h4: {
    fontSize: 22,
    color: colors.black,
    fontWeight: '600'
  },
  small: {
    fontSize: 16,
    color: colors.black,
  },
  btn: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: spacing[2],
    backgroundColor: colors.blue,
    textAlign: "center",
    color: colors.white,
    borderRadius: 25,
    marginVertical: spacing[1]
  },
};
