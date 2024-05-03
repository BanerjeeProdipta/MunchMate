import React, { useMemo, useRef, useState } from "react";
import {
  SectionList,
  FlatList,
  Pressable,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import { items } from "@/data";
import ItemCard from "@/components/items/ItemCard";
import Details from "@/components/shop/Details";
import { Item } from "@/types";
import { groupBy } from "@/utils";
import Header from "@/components/shop/Header";

const Shop = () => {
  const sectionListRef = useRef<SectionList<Item>>(null);
  const [showCategoryNav, setShowCategoryNav] = useState(false);

  const sections = useMemo(() => {
    const groupedBySections = groupBy(items, "category");
    return Object.keys(groupedBySections).map((category) => ({
      title: category,
      data: groupedBySections[category],
    }));
  }, [items]);

  const handleScroll = (event: any) => {
    const { y } = event.nativeEvent.contentOffset;
    const windowHeight = Dimensions.get("window").height;
    setShowCategoryNav(y > windowHeight);
  };

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

  const renderItem = ({ item }: { item: Item }) => <ItemCard {...item} />;

  const CategoryNav = () => {
    return (
      <ScrollView
        horizontal
        className="bg-gray-100"
        stickyHeaderHiddenOnScroll={true}
        showsHorizontalScrollIndicator={false}
      >
        {sections.map((section) => (
          <Pressable
            key={section.title}
            onPress={() => scrollToCategory(section.title)}
          >
            <Text className="font-bold mr-4 my-6 px-4">{section.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {showCategoryNav && (
        <View className="sticky top-0 z-10">
          <CategoryNav />
        </View>
      )}
      <SectionList
        ref={sectionListRef}
        className="bg-gray-100"
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="mb-1 font-bold px-4">{title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
        ListHeaderComponent={
          <ScrollView>
            <Header />
            <Details />
            <CategoryNav />
          </ScrollView>
        }
      />
    </View>
  );
};

export default Shop;
