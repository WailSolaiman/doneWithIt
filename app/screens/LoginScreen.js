import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen = () => {
	return (
		<Screen>
			<Image style={styles.logo} source={require("../assets/logo.png")} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					name="email"
					autoCapitalize="none"
					autoCorrect={false}
					icon="email"
					keyboardType="email-address"
					placeholder="Email"
					textContentType="emailAddress"
				/>
				<AppFormField
					name="password"
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					secureTextEntry
					placeholder="Password"
					textContentType="password"
				/>
				<AppSubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
};

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 50,
	},
});

export default LoginScreen;
