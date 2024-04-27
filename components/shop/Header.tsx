import { View, Pressable, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View className="relative">
      <Image
        source={{ uri: "https://picsum.photos/100/200" }}
        className="w-full h-56 bg-gray-200 p-4"
      />
      <Pressable
        className="absolute top-14 left-2 rounded-full bg-gray-200"
        onPress={navigation.goBack}
      >
        <Feather name="arrow-left" size={24} color="gray" />
      </Pressable>
    </View>
  );
};

export default Header;
