import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      className="rounded"
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 12,
      }}
    >
      <CategoryCard title="Test" imgUrl="https://picsum.photos/200" />
      <CategoryCard title="Test" imgUrl="https://picsum.photos/200" />
      <CategoryCard title="Test" imgUrl="https://picsum.photos/200" />
    </ScrollView>
  );
}
