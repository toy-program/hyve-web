import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AntDesign } from "@expo/vector-icons";
import Test from "@/Test";

const TabNavigation = createBottomTabNavigator({
  Home: {
    screen: Test,
    navigationOptions: {
      title: "홈",
      tabBarIcon: <AntDesign name="home" />
    }
  },
  Study: {
    screen: Test,
    navigationOptions: {
      title: "스터디",
      tabBarIcon: <AntDesign name="book" />
    }
  },
  MyPage: {
    screen: Test,
    navigationOptions: {
      title: "내 정보",
      tabBarIcon: <AntDesign name="infocirlceo" />
    }
  }
});

export default createAppContainer(TabNavigation);
