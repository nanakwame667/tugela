import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import colors from "../colors";
import { Fonts } from "../theme";
import Header from "../components/Header";
import Account from "../components/Profile/Account";
import Skills from "../components/Profile/Skills";
import Jobs from "../components/Profile/Jobs";
import Education from "../components/Profile/Education";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={"Profile"}
        iconStyle={styles.iconContainer}
        iconName="long-arrow-left"
        color={colors.white}
        size={24}
      />
      <ScrollView style={{ flex: 1, paddingVertical: 40 }}>
        <View style={styles.check}>
          <Account />
        </View>
        <View>
          <Skills />
        </View>
        <View>
          <Jobs />
        </View>
        <View>
          <Education />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  textContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 0.6,
    marginHorizontal: 22,
    marginVertical: 45,
  },
  passInput: {
    width: "60%",
  },
  errorText: {
    color: colors.danger,
    marginVertical: 6,
  },
  formPass: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  check: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  job: {
    flex: 0.7,
    marginHorizontal: 20,
  },
  textButton: {
    color: colors.danger,
  },
  labelButton: {
    fontSize: 16,
    color: colors.danger,
    textDecorationLine: "underline",
    textDecorationColor: colors.danger,
    textDecorationStyle: "dotted",
  },
  input: {
    height: 60,
    paddingHorizontal: 14,
    fontSize: 20,
    fontFamily: Fonts.regular,
    marginVertical: 10,
  },
  inputActive: {
    height: 60,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.space,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingHorizontal: 14,
    fontSize: 20,
    fontFamily: Fonts.medium,
    elevation: 5,
  },
  input1: {
    height: 60,
    paddingHorizontal: 14,
    fontSize: 20,
    fontFamily: Fonts.regular,
    marginVertical: 14,
    width: "75%",
  },
  inputActive1: {
    width: "75%",
    height: 60,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.space,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingHorizontal: 14,
    fontSize: 20,
    fontFamily: Fonts.medium,
    elevation: 5,
  },
  keyboardAvoidingView: {
    flex: 0.3,
  },
  buttonGroup: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 60,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: "44%",
  },
  button1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: "48%",
    borderRadius: 50,
    borderColor: colors.primary,
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
  buttonText1: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: colors.primary,
  },
});
