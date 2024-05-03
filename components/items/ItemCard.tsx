import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Item } from "@/types";
import { Feather } from "@expo/vector-icons";
import useCartStore from "@/hooks/useCart";

export default function ItemCard(props: Item) {
  const { id, category, name, description, price, imgUrl } = props;
  const addToCart = useCartStore((state) => state.addItem);
  const removeFromCart = useCartStore((state) => state.removeItem);
  const cartItems = useCartStore((state) => state.cart || []);

  // const groupedById = Object.groupBy(cartItems, ({ id }) => id);

  return (
    <View className="relative mb-4 px-4">
      <View className="bg-white flex-row w-full rounded-xl">
        <View className="flex-1 p-4 space-y-2 justify-between ">
          <Text className="font-medium">{name}</Text>
          <Text className="text-gray-500">{description}</Text>
          <Text className="text-gray-600">{category}</Text>
          <Text>${price}</Text>
        </View>
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-32 h-full rounded-r-xl"
        />
      </View>
      <View className="absolute bottom-0 right-7 h-8 flex justify-between items-center rounded-full bg-white space-x-4 flex-row">
        {/* <Pressable
          className="bg-primary w-10 h-10 rounded-full flex justify-center items-center"
          onPress={() => addToCart(props)}
        >
          <Feather name="plus-circle" size={32} color="pink" />
        </Pressable> */}
        {/* <Text className="font-bold text-center w-14">
          {groupedById[id]?.length ?? 0}
        </Text>
        <Pressable
          className="bg-primary w-10 h-10 rounded-full flex justify-center items-center"
          disabled={groupedById[id]?.length === 0}
          onPress={() => removeFromCart(props)}
        >
          <Feather name="minus-circle" size={32} color="pink" />
        </Pressable> */}
      </View>
    </View>
  );
}
