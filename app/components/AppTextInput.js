import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					style={styles.icon}
					color={defaultStyles.colors.placeholder}
					size={25}
				/>
			)}
			<TextInput
				style={[defaultStyles.text, styles.textInput]}
				{...otherProps}
				placeholderTextColor={defaultStyles.colors.placeholder}
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
