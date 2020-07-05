import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import AppPickerItem from "./AppPickerItem";
import defaultStyles from "../config/styles";

const AppPicker = ({
	icon,
	items,
	placeholder,
	onSelectItem,
	selectedItem,
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							style={styles.icon}
							color={defaultStyles.colors.quaternary}
							size={25}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>
							{selectedItem.label}
						</AppText>
					) : (
						<AppText style={styles.placehoder}>
							{placeholder}
						</AppText>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						color={defaultStyles.colors.placeholder}
						size={25}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Button title="close" onPress={() => setModalVisible(false)} />
				<FlatList
					data={items}
					keyExtractor={(item) => item.value}
					renderItem={({ item }) => (
						<AppPickerItem
							label={item.label}
							onPress={() => {
								setModalVisible(false);
								onSelectItem(item);
							}}
						/>
					)}
				/>
			</Modal>
		</React.Fragment>
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
	placehoder: {
		flex: 1,
		color: defaultStyles.colors.placeholder,
	},
	text: {
		flex: 1,
	},
});

export default AppPicker;
