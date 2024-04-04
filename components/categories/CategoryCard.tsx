import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  title: string;
  imgUrl: string;
};

export default function CategoryCard(props: Props) {
  const { title, imgUrl } = props;
  return (
    <TouchableOpacity className="relative h-20 w-20">
      <Image source={{ uri: imgUrl }} className="absolute h-20 w-20 rounded" />
      <Text className="absolute bottom-0 text-white font-semibold p-2">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
