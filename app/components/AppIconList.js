import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

const AppIconList = ({ title, icon, color, style }) => {
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons
        style={[styles.icon, { backgroundColor: defaultStyles.colors[color] }]}
        size={20}
        name={icon}
        color={defaultStyles.colors.light}
      />
      <AppText>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: defaultStyles.colors.light,
    marginBottom: 5,
  },
  icon: {
    marginRight: 15,
    borderRadius: 50,
    padding: 5,
  },
});

export default AppIconList;
