import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { Shop } from "@/types";
import ShopCard from "../shopCard";

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
        data={items}
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

const items = [
  {
    id: 1,
    title: "Yum Pizza",
    imgUrl: "https://picsum.photos/100/200",
    rating: 4.5,
    category: "Dessert",
    reviewCount: 120,
    delivery: {
      time: "30 minutes",
      charge: 3.99,
    },
  },
  {
    id: 2,
    title: "Burger Hut",
    imgUrl: "https://picsum.photos/100/200",
    rating: 4.2,
    category: "Dessert",
    reviewCount: 90,
    delivery: {
      time: "25 minutes",
      charge: 2.99,
    },
  },
  {
    id: 3,
    title: "Fresh Greens",
    imgUrl: "https://picsum.photos/100/200",
    rating: 4.7,
    category: "Dessert",
    reviewCount: 80,
    delivery: {
      time: "20 minutes",
      charge: 1.99,
    },
  },
  {
    id: 4,
    title: "Move and pick",
    imgUrl: "https://picsum.photos/100/200",
    rating: 4.7,
    category: "Dessert",
    reviewCount: 80,
    delivery: {
      time: "20 minutes",
      charge: 1.99,
    },
  },
];
