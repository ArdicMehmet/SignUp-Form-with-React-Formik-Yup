import { useFormik } from "formik";
import "../css/register.css";
import { registerSchema } from "../schemas/registerFormSchema.js";

function RegisterForm() {
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      term: false,
    },
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      // Send the values to the required anywhere.
      resetForm(); // If the API response is successful, reset the form
    },
  });

  return (
    <>
      <div className="wrapper">
        <h2>Registration</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <p className="error-message">{errors.name && errors.name}</p>
          </div>
          <div className="input-box">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            <p className="error-message">{errors.email && errors.email}</p>
          </div>
          <div className="input-box">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create password"
              value={values.password}
              onChange={handleChange}
              autoComplete="password"
            />
            <p className="error-message">
              {errors.password && errors.password}
            </p>
          </div>
          <div className="input-box">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
              autoComplete="confirm-password"
            />
            <p className="error-message">
              {errors.confirmPassword && errors.confirmPassword}
            </p>
          </div>
          <div className="policy">
            <div>
              <input
                id="term"
                name="term"
                type="checkbox"
                value={values.term}
                onChange={handleChange}
              />
              <h3>I accept all terms & condition</h3>
            </div>
            <p className="error-message">{errors.term && errors.term}</p>
          </div>

          <div className="input-box button">
            <input type="Submit" value={"Sign Up"} />
          </div>
          <div className="text">
            <h3>
              Already have an account? <a href="#">Login now</a>
            </h3>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
