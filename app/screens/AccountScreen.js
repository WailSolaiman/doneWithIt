import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppListItem from "../components/AppListItem";
import AppIconList from "../components/AppIconList";

const user = {
	name: "Wail Solaiman",
	email: "wailsolaiman@hotmail.com",
	image: require("../assets/mosh.jpg"),
};

const AccountScreen = () => {
	return (
		<Screen>
			<View style={styles.container}>
				<AppListItem
					title={user.name}
					subTitle={user.email}
					image={user.image}
				/>
				<AppIconList
					title="My Listings"
					icon="format-list-bulleted"
					color="primary"
				/>
				<AppIconList
					title="My Messages"
					icon="email"
					color="secondary"
				/>
				<AppIconList
					title="Log Out"
					icon="logout"
					color="tertiary"
					style={styles.space}
				/>
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	space: {
		marginTop: 50,
	},
});

export default AccountScreen;
