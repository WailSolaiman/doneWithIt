import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "../AppTextInput";

const AppFormField = ({ name, ...otherProps }) => {
	const {
		errors,
		handleChange,
		setFieldTouched,
		touched,
	} = useFormikContext();
	return (
		<React.Fragment>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				{...otherProps}
			/>
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</React.Fragment>
	);
};

const styles = StyleSheet.create({});

export default AppFormField;
