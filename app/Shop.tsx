import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import ItemCard from "@/components/items/ItemCard";

export type ShopScreenNavigationParams = {
  shopId: number;
};

export default function Shop() {
  const route = useRoute();
  const navigation = useNavigation();
  const { shopId } = route.params as ShopScreenNavigationParams;

  return (
    <ScrollView>
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
      <View className="bg-gray-100 py-4 px-4 space-y-3">
        <View>
          <Text className="text-xl font-bold">Nando's</Text>
        </View>
        <View className="flex flex-row items-center space-x-3">
          <Feather name="star" size={16} color="orange" />
          <Text className="font-medium">4.5</Text>
          <Text className="text-sm text-gray-600">(900+) Ratings</Text>
        </View>
        <View className="flex flex-row items-center space-x-3">
          <Feather name="clock" size={16} color="orange" />
          <Text>Delivery 20-30 minutes</Text>
        </View>
        <View className="bg-primary px-4 py-2 rounded-xl">
          <Text className="font-bold text-lg text-white">DAILY</Text>
          <Text className="text-gray-100 pb-2">
            Use this code to get 20% off upto $50 for orders over $300.
          </Text>
        </View>
        <View>
          <Text className="text-lg font-semibold mb-3">Menu</Text>
          <ScrollView
            className="rounded"
            contentContainerStyle={{
              rowGap: 12,
            }}
          >
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
