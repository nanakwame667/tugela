import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { NotificationsData } from "../../data/NotificationData";
import { DemandData } from "../../data/DemandData";
import colors from "../../colors";
import CustomText from "../CustomText";
import { FontAwesome } from "@expo/vector-icons";
import { Button, Chip } from "react-native-paper";
import { Fonts } from "../../theme";

const Item = ({ title, time, category, salary, description }) => {
  const [isClicked, setIsClicked] = useState(true);

  const heartClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <View style={styles.item}>
      <View style={styles.perItem}>
        <View style={styles.jobTitle}>
          <CustomText weight="bold" style={{ fontSize: 22 }}>
            {title}
          </CustomText>
          <CustomText weight="regular" style={{ fontSize: 14 }}>
            {time}
          </CustomText>
        </View>
        <View style={styles.category}>
          <CustomText
            weight="regular"
            style={{ fontSize: 18, color: colors.primary }}
          >
            {category}
          </CustomText>
          <View style={styles.categoryIcon}>
            <TouchableOpacity style={{ marginRight: 8 }} onPress={heartClick}>
              {isClicked ? (
                <FontAwesome name="heart-o" size={28} color={colors.primary} />
              ) : (
                <FontAwesome name="heart" size={28} color={colors.primary} />
              )}
            </TouchableOpacity>
            <CustomText
              weight="regular"
              style={{ fontSize: 16, color: colors.primary }}
            >
              Save job
            </CustomText>
          </View>
        </View>
        <View style={styles.salary}>
          <View style={styles.salaryText}>
            <CustomText
              style={{ marginVertical: 5, fontSize: 24 }}
              weight="bold"
            >
              ${salary}
            </CustomText>
            <CustomText>24 Proposal</CustomText>
          </View>
          <Button
            mode="contained"
            buttonColor={colors.primary}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Apply Now
          </Button>
        </View>
        <View style={styles.description}>
          <CustomText style={{ fontSize: 14, lineHeight: 24 }}>
            {description}
          </CustomText>
        </View>
        <View style={styles.chip}>
          <Chip
            onPress={() => console.log("Pressed")}
            style={{
              borderRadius: 50,
              backgroundColor: colors.background,
            }}
          >
            <CustomText weight="medium">SAS</CustomText>
          </Chip>
          <Chip
            onPress={() => console.log("Pressed")}
            style={{
              borderRadius: 50,
              backgroundColor: colors.background,
            }}
          >
            <CustomText weight="medium">Microsoft Azure</CustomText>
          </Chip>
          <Chip
            onPress={() => console.log("Pressed")}
            style={{
              borderRadius: 50,
              backgroundColor: colors.background,
            }}
          >
            <CustomText weight="medium">Python</CustomText>
          </Chip>
        </View>
      </View>
    </View>
  );
};

const DemandJob = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DemandData}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            time={item.time}
            category={item.category}
            salary={item.salary}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default DemandJob;
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
  list: {
    flex: 0.9,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "column",
    width: "100%",
    paddingVertical: 20,
  },
  perItem: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
  },
  salary: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  salaryText: {
    flexDirection: "column",
  },
  description: {
    marginVertical: 20,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  jobTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 18,
  },
  categoryIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  indicatorContainer: {
    flex: 0.1,
    alignItems: "center",
    marginRight: 2,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: colors.primary,
  },
  itemText: {
    flex: 0.9,
  },
  title: {
    fontSize: 16,
    color: colors.title,
  },
  time: {
    marginTop: 10,
    textAlign: "right",
    color: colors.title,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: "45%",
  },
});
