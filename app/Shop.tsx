import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useMemo, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import ItemCard from "@/components/items/ItemCard";
import { items } from "@/data";
import Header from "@/components/shop/Header";
import Details from "@/components/shop/Details";
import Menu from "@/components/shop/Menu";

export type ShopScreenNavigationParams = {
  shopId: number;
};

export default function Shop() {
  const route = useRoute();
  const navigation = useNavigation();
  const { shopId } = route.params as ShopScreenNavigationParams;
  const scrollViewRef = useRef(null);

  return (
    <ScrollView ref={scrollViewRef}>
      <Header />
      <View className="bg-gray-100 py-4 px-4 space-y-3">
        <Details />
        <Menu />
      </View>
    </ScrollView>
  );
}
