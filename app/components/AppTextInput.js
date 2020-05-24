import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          color={defaultStyles.colors.quaternary}
          size={30}
          name={icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 15,
  },
  icon: {
    marginRight: 15,
  },
  textInput: {
    color: defaultStyles.colors.quaternary,
  },
});

export default AppTextInput;
