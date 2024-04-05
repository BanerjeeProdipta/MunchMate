import { View, Text, Image } from "react-native";
import React from "react";

export default function ItemCard() {
  return (
    <View className="bg-white flex-row w-full h-28 rounded-xl">
      <View className="flex-1 p-4 space-y-2 justify-between ">
        <Text className="font-medium">Item-1</Text>
        <Text className="text-gray-500">Blah blah</Text>
        <Text>$16</Text>
      </View>
      <Image
        source={{
          uri: "https://picsum.photos/100/200",
        }}
        className="w-32 h-full rounded-r-xl"
      />
    </View>
  );
}
