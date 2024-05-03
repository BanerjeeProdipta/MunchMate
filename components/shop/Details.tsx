import { Text, View } from "react-native";
import React, { Component } from "react";
import { Feather } from "@expo/vector-icons";

const Details = () => {
  return (
    <View className="space-y-4 px-4">
      <Text className="text-xl font-bold">Nando's</Text>
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
    </View>
  );
};

export default Details;
