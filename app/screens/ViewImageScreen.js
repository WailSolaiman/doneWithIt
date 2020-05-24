import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

const ViewImageScreen = () => {
  return (
    <Screen>
      <View style={styles.iconsContainer}>
        <MaterialCommunityIcons
          style={styles.closeIcon}
          name="close"
          color={defaultStyles.colors.dark}
          size={25}
        />
        <MaterialCommunityIcons
          style={styles.deleteIcon}
          name="trash-can-outline"
          color={defaultStyles.colors.dark}
          size={25}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: "flex-start",
  },
  deleteIcon: {
    alignSelf: "flex-end",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
