import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import AppText from "../components/AppText";
import AppListItem from "../components/AppListItem";
import AppListItemDeleteAction from "../components/AppListItemDeleteAction";

const ListingDetailsScreen = () => {
	return (
		<Screen>
			<Image
				style={styles.image}
				source={require("../assets/jacket.jpg")}
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>jacket</AppText>
				<AppText style={styles.price}>jacket</AppText>
			</View>
			<View style={styles.userContainer}>
				<AppListItem
					title="Wail Solaiman"
					subTitle="5 Listings"
					image={require("../assets/mosh.jpg")}
					onPress={() => console.log("ListingDetailsScreen")}
					renderRightActions={() => (
						<AppListItemDeleteAction
							onPress={() => console.log("pressed")}
						/>
					)}
				/>
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	price: {
		color: defaultStyles.colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingDetailsScreen;
