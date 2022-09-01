import { useEffect, useState } from "react";

export const MyFormik = ({ children, initialValues, validate }) => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		setErrors({
			...validate(values),
		});
	}, [values, validate]);

	return (
		<div>
			{children({
				values,
				errors,
				handleChange,
			})}
		</div>
	);
};
