import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import defaultStyles from "../config/styles";

const Screen = ({ children }) => (
	<SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: defaultStyles.colors.medium,
		padding: 15,
	},
});

export default Screen;
