import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

const AppButton = ({ title, onPress, color = "primary" }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ backgroundColor: defaultStyles.colors[color] },
			]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		padding: 10,
		backgroundColor: defaultStyles.colors.primary,
		borderRadius: 50,
		marginVertical: 10,
	},
	text: {
		color: defaultStyles.colors.light,
		textTransform: "uppercase",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default AppButton;
