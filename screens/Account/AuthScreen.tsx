import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StatusBarSpace from "../../components/StatusBarSpace";

const AuthScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#dcb688" }}>
      <StatusBarSpace />
      <Text>AuthScreen</Text>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
