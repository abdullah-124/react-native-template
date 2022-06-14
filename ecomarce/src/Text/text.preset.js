import { colors } from "../../theme/colors"
import { spacing } from "../../theme/spacing"

export const presets = {
  default: { fontSize: 18, color: colors.black },
  h1: {
    fontSize: 28,
    color: colors.black,
    fontWeight: 'bold'
  },
  h3: {
    fontSize: 26,
    color: colors.black,
    fontWeight: 'bold'
  },
  h4: {
    fontSize: 20,
    color: colors.gray,
    fontWeight: '600'
  },
  small: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: '600'
  },
  btn: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: spacing[2],
    backgroundColor: colors.green,
    textAlign: "center",
    color: colors.white,
    borderRadius: 10,
    marginVertical: spacing[1]
  },
};
