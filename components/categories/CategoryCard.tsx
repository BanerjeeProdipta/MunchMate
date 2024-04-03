import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  title: string;
  imgUrl: string;
};

export default function CategoryCard(props: Props) {
  const { title, imgUrl } = props;
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
