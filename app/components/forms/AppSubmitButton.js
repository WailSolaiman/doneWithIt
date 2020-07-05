import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const AppSubmitButton = ({ title }) => {
	const { handleSubmit } = useFormikContext();
	return (
		<React.Fragment>
			<AppButton title={title} onPress={handleSubmit} />
		</React.Fragment>
	);
};

export default AppSubmitButton;
