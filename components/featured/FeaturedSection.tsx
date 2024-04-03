import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import ItemCard from "../itemCard";
import { Item } from "@/types";

type Props = {
  id: number;
  title: string;
};

export default function FeaturedSection(props: Props) {
  const { id, title } = props;

  const renderItem = ({ item }: { item: Item }) => <ItemCard item={item} />;

  return (
    <View>
      <Text className="text-lg font-semibold">{title}</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
}

const items = [
  {
    id: 1,
    title: "Delicious Pizza",
    imgUrl: "https://picsum.photos/100/200",
    rating: 4.5,
    reviewCount: 120,
    delivery: {
      time: "30 minutes",
      charge: 3.99,
    },
  },
  {
    id: 2,
    title: "Burger Combo",
    imgUrl: "https://picsum.photos/100/200",
    rating: 4.2,
    reviewCount: 90,
    delivery: {
      time: "25 minutes",
      charge: 2.99,
    },
  },
  {
    id: 3,
    title: "Fresh Salad",
    imgUrl: "https://picsum.photos/100/200",
    rating: 4.7,
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
    reviewCount: 80,
    delivery: {
      time: "20 minutes",
      charge: 1.99,
    },
  },
];
