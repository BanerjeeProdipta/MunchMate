import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";

import { Shop } from "@/types";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function ShopCard(props: Shop) {
  const { id, title, imgUrl, rating, reviewCount, delivery, category } = props;
  const navigation = useNavigation();

  const handleShopPress = () => {
    // Navigate to the shops screen
    navigation.navigate("ShopsScreen", { shopId: id }); // Replace "ShopsScreen" with the name of your shops screen
  };

  return (
    <TouchableOpacity
      className="bg-white rounded-lg shadow-md w-56"
      activeOpacity={0.8}
      onPress={handleShopPress}
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

        <View className="flex flex-row justify-between">
          <Text className="">{delivery.time}</Text>
          <Text className="font-medium">${delivery.charge.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
