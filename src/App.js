// import { Formik } from "formik";
import { MyFormik } from "./MyFormik";

function App() {
	return (
		<div className="App">
			<h1>use Formik</h1>
			<MyFormik
				initialValues={{
					email: "",
					password: "",
				}}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Imvailid email address";
					}
					if (values.password.length <= 6) {
						errors.password = "Invalid password";
					}
					return errors;
				}}
				onSubmit={async (values, { setSubmitting }) => {
					await new Promise((r) => setTimeout(r, 500));
					setSubmitting(false);
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{({ values, handleChange, errors }) => (
					<form>
						<label htmlFor="email">Email</label>
						<input
							onChange={handleChange}
							// onBlur={handleBlur}
							value={values.email}
							id="email"
							name="email"
							placeholder="jane@acme.com"
							type="email"
						/>

						<label htmlFor="password">password</label>
						<input
							id="password"
							name="password"
							placeholder="password"
							onChange={handleChange}
							// onBlur={handleBlur}
							value={values.password}
						/>
						{JSON.stringify(errors)}
						<button type="submit">Submit</button>
					</form>
				)}
			</MyFormik>
		</div>
	);
}

export default App;
