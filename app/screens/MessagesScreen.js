import React, { useState } from "react";
import { FlatList } from "react-native";

import Screen from "../components/Screen";
import AppListItem from "../components/AppListItem";
import AppListItemSeperator from "../components/AppListItemSeperator";
import AppListItemDeleteAction from "../components/AppListItemDeleteAction";

const initialMessages = [
	{
		id: "1",
		title: "T1",
		description: "D1",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: "2",
		title: "T2",
		description: "D2",
		image: require("../assets/mosh.jpg"),
	},
];

const MessagesScreen = () => {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		setMessages(messages.filter((item) => message.id !== item.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id}
				renderItem={({ item }) => {
					return (
						<AppListItem
							title={item.title}
							subTitle={item.description}
							image={item.image}
							onPress={() => console.log("MessagesScreen", item)}
							renderRightActions={() => (
								<AppListItemDeleteAction
									onPress={() => handleDelete(item)}
								/>
							)}
						/>
					);
				}}
				ItemSeparatorComponent={AppListItemSeperator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: "2",
							title: "T2",
							description: "D2",
							image: require("../assets/mosh.jpg"),
						},
					]);
				}}
			/>
		</Screen>
	);
};

export default MessagesScreen;
