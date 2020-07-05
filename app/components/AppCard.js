import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import AppText from "../components/AppText";
import defaultStyles from "../config/styles";

const AppCard = ({ title, subTitle, image, onPress = () => {} }) => {
	return (
		<TouchableHighlight
			underlayColor={defaultStyles.colors.medium}
			onPress={onPress}
		>
			<View style={styles.card}>
				<Image source={image} style={styles.image} />
				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subTitle}>{subTitle}</AppText>
				</View>
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: defaultStyles.colors.light,
		marginBottom: 20,
		overflow: "hidden",
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	subTitle: {
		color: defaultStyles.colors.secondary,
		fontWeight: "bold",
	},
	title: {
		marginBottom: 7,
	},
});

export default AppCard;
