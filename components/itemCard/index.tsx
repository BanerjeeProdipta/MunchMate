import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";

import { Item } from "@/types";
import { Feather } from "@expo/vector-icons";

type Props = {
  item: Item; // Add this line to include the 'item' prop
};

export default function ItemCard(props: Props) {
  const { title, imgUrl, rating, reviewCount, delivery } = props.item;

  return (
    <TouchableOpacity
      className="bg-white rounded-lg overflow-hidden shadow-md mr-4"
      activeOpacity={0.8}
    >
      <Image source={{ uri: imgUrl }} className="w-48 h-32" />
      <View className="mt-1.5">
        <View className="flex flex-row justify-between items-center mb-2">
          <Text className="text-md font-semibold">{title}</Text>
          <View className="flex flex-row justify-between items-center">
            <Feather name="star" size={16} color="blue" />
            <Text className="font-medium mr-2">{rating}</Text>
            <Text className="text-sm text-gray-600">{reviewCount} reviews</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between">
          <Text className="">{delivery.time}</Text>
          <Text className="font-medium">${delivery.charge.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
