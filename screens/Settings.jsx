import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import colors from "../colors";
import { Fonts } from "../theme";
import CustomText from "../components/CustomText";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { SettingsData } from "../data/settingsData";

const Item = ({ title }) => (
  <View style={styles.item}>
    <CustomText style={styles.title} weight="medium">
      {title}
    </CustomText>
  </View>
);
const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome name="long-arrow-left" size={24} color={colors.white} />
        </View>
        <CustomText weight="bold" style={styles.text}>
          Settings
        </CustomText>
        <FontAwesome5 name="power-off" size={24} color={colors.danger} />
      </View>
      <View style={styles.list}>
        <FlatList
          data={SettingsData}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
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
  headerContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
  list: {
    flex: 0.9,
    paddingVertical: 46,
    paddingHorizontal: 30,
  },
  item: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    color: colors.text,
  },
  text: {
    fontSize: 20,
    color: colors.primary,
  },

  keyboardAvoidingView: {
    flex: 0.3,
  },
});
