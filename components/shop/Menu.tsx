import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { items } from "@/data";
import ItemCard from "../items/ItemCard";
import { Item } from "@/types";

type GroupByCategory = { [category as string]: Item[] };

const Menu = () => {
  const [groupedByCategories, setGroupedByCategories] =
    useState<GroupByCategory>({});

  useEffect(() => {
    const groupedItems = items.reduce((acc, item) => {
      const { category } = item;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
    setGroupedByCategories(groupedItems);
  }, []);

  const scrollToCategory = (category: string) => {
    const categoryView = document.getElementById(category);
  };

  return (
    <ScrollView stickyHeaderIndices={[1]}>
      <ScrollView
        horizontal
        className="rounded"
        contentContainerStyle={{
          paddingVertical: 16,
          gap: 12,
        }}
        showsVerticalScrollIndicator={false}
      >
        {Object.keys(groupedByCategories).map((category) => (
          <Pressable key={category} onPress={() => scrollToCategory(category)}>
            <Text className="font-semibold">{category}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <FlatList
        data={Object.entries(groupedByCategories)}
        renderItem={({ item }) => {
          const [category, categoryItems] = item;
          return (
            <View key={category} id={category}>
              {categoryItems?.map((item, index) => (
                <ItemCard key={index} {...item} />
              ))}
            </View>
          );
        }}
        keyExtractor={(index) => index.toString()}
      />
    </ScrollView>
  );
};

export default Menu;
