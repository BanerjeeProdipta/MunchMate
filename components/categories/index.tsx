import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView horizontal className="rounded px-4 py-2 bg-white">
      <CategoryCard
        title="Test"
        imgUrl="https://robohash.org/mail@ashallendesign.co.uk"
      />
      <CategoryCard
        title="Test"
        imgUrl="https://robohash.org/mail@ashallendesign.co.uk"
      />
      <CategoryCard
        title="Test"
        imgUrl="https://robohash.org/mail@ashallendesign.co.uk"
      />
    </ScrollView>
  );
}
