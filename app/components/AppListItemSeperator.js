import React from "react";
import { View, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

const AppListItemSeperator = () => <View style={styles.seperator} />;

const styles = StyleSheet.create({
	seperator: {
		width: "100%",
		height: 1,
		backgroundColor: defaultStyles.colors.light,
	},
});

export default AppListItemSeperator;
