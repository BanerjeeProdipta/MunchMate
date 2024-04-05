import { View, Text, Image, Pressable } from "react-native";
import React from "react";

import { Shop } from "@/types";
import { Feather } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export default function ShopCard(props: Shop) {
  const { id, title, imgUrl, rating, reviewCount, delivery, category } = props;
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const navigateToShop = () => {
    navigation.navigate("Shop", { id });
  };

  return (
    <Pressable
      className="bg-white rounded-lg shadow-md w-56"
      onPress={navigateToShop}
    >
      <Image source={{ uri: imgUrl }} className="w-full h-32 rounded-t" />
      <View className="mt-0.5 p-2 space-y-1">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-md font-semibold">{title}</Text>
          <View className="flex flex-row justify-between items-center space-x-0.5">
            <Feather name="star" size={16} color="orange" />
            <Text className="font-medium">{rating}</Text>
            <Text className="text-sm text-gray-600">({reviewCount})</Text>
          </View>
        </View>
        <Text className="text-gray-600">{category}</Text>

        <View className="flex flex-row justify-between items-center">
          <Text>{delivery.time}</Text>
          <Text className="font-medium">${delivery.charge.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
