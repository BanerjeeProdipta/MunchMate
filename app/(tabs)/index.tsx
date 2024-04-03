import { Feather } from "@expo/vector-icons";
import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";

import Categories from "@/components/categories";
import Featured from "@/components/featured";

export default function TabOneScreen() {
  return (
    <SafeAreaView className="bg-gray-200 space-y-3">
      {/* Header start  */}
      <View className="bg-primary px-3 py-2 space-y-3">
        <View className="space-y-3 flex-row items-center justify-between space-x-3">
          <View className="flex-row items-center space-x-3">
            <Feather name="menu" size={32} color="white" />
            <View>
              <Text className="font-semibold text-white text-sm">
                Philip Soroni
              </Text>
              <Text className="text-white text-xs">Savar</Text>
            </View>
          </View>
          <View>
            <Feather name="shopping-bag" size={24} color="white" />
          </View>
        </View>
        <View className="flex-row items-center p-1.5 space-x-3 bg-white rounded-full px-2">
          <Feather name="search" size={24} color="gray" />
          <TextInput placeholder="Search for shops and restaurants"></TextInput>
        </View>
      </View>
      {/* Header end  */}

      {/* Body start  */}
      <ScrollView>
        <Categories />
        <Featured />
      </ScrollView>
      {/* Body end  */}
    </SafeAreaView>
  );
}
