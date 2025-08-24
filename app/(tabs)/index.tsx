import { ImageBackground, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <ImageBackground
        source={require("../../assets/images/bg.png")}
      ></ImageBackground>
    </View>
  );
}
