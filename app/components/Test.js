import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function Test() {
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: landscape ? "100%" : "30%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View>
        <Text style={styles.text}>Test</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});
