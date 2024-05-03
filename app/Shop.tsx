import React, { useMemo, useRef } from "react";
import {
  SectionList,
  FlatList,
  Pressable,
  Text,
  View,
  ScrollView,
} from "react-native";
import { items } from "@/data";
import ItemCard from "@/components/items/ItemCard";
import Details from "@/components/shop/Details";
import { Item } from "@/types";
import { groupBy } from "@/utils";
import Header from "@/components/shop/Header";

const Shop = () => {
  const sectionListRef = useRef<SectionList<Item>>(null);

  const sections = useMemo(() => {
    const groupedBySections = groupBy(items, "category");
    return Object.keys(groupedBySections).map((category) => ({
      title: category,
      data: groupedBySections[category],
    }));
  }, [items]);

  const scrollToCategory = (category: string) => {
    const index = sections.findIndex((section) => section.title === category);
    if (index !== -1 && sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: true,
      });
    }
  };

  const renderCategoryNavBar = ({ item }: { item: string }) => (
    <Pressable onPress={() => scrollToCategory(item)}>
      <Text style={{ fontWeight: "bold", marginVertical: 3, marginRight: 12 }}>
        {item}
      </Text>
    </Pressable>
  );

  const renderItem = ({ item }: { item: Item }) => <ItemCard {...item} />;

  return (
    <SectionList
      ref={sectionListRef}
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <Text className="font-bold mb-2 px-4">{title}</Text>
      )}
      keyExtractor={(item) => item.id.toString()}
      className="bg-gray-100"
      ListHeaderComponent={
        <ScrollView>
          <Header />
          <View className="bg-gray-100 py-4 px-4 space-y-3">
            <Details />
          </View>
        </ScrollView>
      }
    />
  );
};

export default Shop;
