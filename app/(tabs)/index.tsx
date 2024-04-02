import EditScreenInfo from "@/components/EditScreenInfo";
import { View, Text } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold">Tab One</Text>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
