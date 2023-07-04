import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.medium/2,
    paddingHorizontal: SIZES.xLarge / 2,
    backgroundColor: activeTab === name ? COLORS.tertiary : "#dedede",
    borderRadius: SIZES.large,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: activeTab === name ? COLORS.lightWhite : "#000000",
  }),
});

export default styles;
