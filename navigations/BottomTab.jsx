import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import JobScreen from "../screens/JobScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Settings from "../screens/Settings";
import Notifications from "../screens/Notifications";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="jobs" component={JobScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
      <Tab.Screen name="settings" component={Settings} />
      <Tab.Screen name="notification" component={Notifications} />
    </Tab.Navigator>
  );
};

export default BottomTab;
