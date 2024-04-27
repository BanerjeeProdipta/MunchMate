import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { Shop } from "@/types";
import ShopCard from "../shopCard";
import { shops } from "@/data";

type Props = {
  id: number;
  title: string;
};

export default function FeaturedSection(props: Props) {
  const { id, title } = props;

  const renderItem = ({ item }: { item: Shop }) => <ShopCard {...item} />;

  return (
    <View className="mb-3">
      <Text className="ml-4 text-lg font-semibold">{title}</Text>
      <FlatList
        data={shops}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
      />
    </View>
  );
}
