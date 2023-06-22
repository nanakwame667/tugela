import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen />
    </Stack.Navigator>
  );
};

export default MainNavigator;
