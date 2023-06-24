import { View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import colors from "../../colors";
import CustomText from "../CustomText";
import { Fonts } from "../../theme";
const Education = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <CustomText style={{ fontSize: 18, color: colors.title }} weight="bold">
          Education
        </CustomText>
      </View>
    </SafeAreaView>
  );
};

export default Education;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 30,
    fontFamily: Fonts.regular,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chip: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 40,
  },
});
