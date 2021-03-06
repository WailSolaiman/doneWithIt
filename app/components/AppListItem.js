import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

const AppListItem = ({
	title,
	subTitle,
	image,
	onPress = () => {},
	renderRightActions = () => {},
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				underlayColor={defaultStyles.colors.medium}
				onPress={onPress}
			>
				<View style={styles.container}>
					<Image style={styles.image} source={image} />
					<View>
						<AppText style={styles.title}>{title}</AppText>
						<AppText style={styles.subTitle}>{subTitle}</AppText>
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	subTitle: {
		color: defaultStyles.colors.secondary,
	},
	title: {
		fontWeight: "500",
	},
});

export default AppListItem;
