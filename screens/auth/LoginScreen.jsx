import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../../components/CustomText";
import colors from "../../colors";
import { Fonts } from "../../theme";
import CheckBox from "../../components/CheckBox";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [isFocusedPassword, setFocusedPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleCheckChange = (checked) => {
    setChecked(checked);
    console.log("Checkbox checked:", checked);
  };

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={require("../../assets/images/login.png")} />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Email Address"
              value={text}
              onChangeText={setText}
              style={isFocused ? styles.inputActive : styles.input}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              maxLength={40}
            />
            <View style={styles.formPass}>
              <TextInput
                secureTextEntry
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={isFocusedPassword ? styles.inputActive1 : styles.input1}
                onFocus={() => setFocusedPassword(true)}
                onBlur={() => setFocusedPassword(false)}
              />
              <Button
                mode="text"
                style={styles.textButton}
                labelStyle={styles.labelButton}
              >
                Forgot?
              </Button>
            </View>
            <View style={styles.check}>
              <CheckBox
                label="Remember Me"
                isChecked={checked}
                onCheckChange={handleCheckChange}
              />
            </View>
            <View>
              <Button>Sign In</Button>
              <Button>Sign Up</Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  formContainer: {
    flex: 0.4,
    marginHorizontal: 22,
    marginVertical: 45,
  },
  formPass: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  check: {
    marginVertical: 8,
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
  },
});

export default LoginScreen;
