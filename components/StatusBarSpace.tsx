import { View } from "react-native";
import React from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function StatusBarSpace() {
  const insets = useSafeAreaInsets();

  return <View style={{ height: insets.top }} />;
}
