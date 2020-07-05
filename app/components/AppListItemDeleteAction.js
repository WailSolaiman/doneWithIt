import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import defaultStyles from "../config/styles";

const AppListItemDeleteAction = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can"
					size={25}
					color={defaultStyles.colors.light}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.danger,
		width: 70,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default AppListItemDeleteAction;
