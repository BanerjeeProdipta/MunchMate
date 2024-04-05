import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export type ShopScreenNavigationParams = {
  shopId: number;
};

export default function Shop() {
  const route = useRoute();
  const { shopId } = route.params as ShopScreenNavigationParams;

  return (
    <View>
      <Text>{shopId}</Text>
    </View>
  );
}
