import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const iconsData = {
  Home: require("../../assets/icons/home.png"),
  Search: require("../../assets/icons/search.png"),
  Saved: require("../../assets/icons/save.png"),
  Profile: require("../../assets/icons/person.png"),
};

const TabIcon = ({ focused, icon, title }: any) => {
  if (!focused)
    return (
      <View className="flex mt-4 justify-center  items-center h-[100%] ">
        <Image source={icon} className="size-5" tintColor="#fff" />
      </View>
    );

  return (
    <ImageBackground
      className="min-h-16 mt-4 rounded-full flex-row min-w-[112px] flex flex-1 justify-center items-center overflow-hidden"
      source={require("../../assets/images/highlight.png")}
    >
      <Image source={icon} tintColor="#151312" className="size-5 " />
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}
      </Text>
    </ImageBackground>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",

          alignItems: "center",
          alignSelf: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          // position: "absolute",
          marginHorizontal: 10,
          overflow: "hidden",
          height: 52,
          marginBottom: 36,
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={iconsData.Home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={iconsData.Search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={iconsData.Saved} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={iconsData.Profile}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
