import { Formik } from "formik";
import { signUpValidationSchema } from "../schema/validationSchema";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../contexts/authContext";

const SignUpForm = () => {
  const user = useAuth();
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  const onSubmit = async (values: any) => {
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(
          values.email,
          values.password
        ).then((response: any) => {
          console.log("User Registered : ", response);
        });
      } catch (error) {
        console.error(error);
        setIsRegistering(false);
      }
    }
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border border-gray-300">
      {user && <Navigate to={"/home"} replace={true} />}
      <h1 className="text-4xl font-semibold">Sign Up</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please provide your email and password to signup
      </p>
      <div className="mt-8">
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{ email: "", password: "", confirmPassword: ""}}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <div className="login">
              <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                  <label className="text-lg font-medium">Enter you email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email..."
                    className={`${
                      errors.email && touched.email
                        ? "border-red-600 focus:outline-none"
                        : "border-gray-200"
                    } border w-full p-4 mt-1 rounded-lg bg-transparent`}
                    id="email"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="text-red-600">
                    {errors.email && touched.email && errors.email}
                  </p>
                  <label className="text-lg font-medium">
                    Enter you password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password..."
                    autoCapitalize="off"
                    className={`${
                      errors.password && touched.password
                        ? "border-red-600 focus:outline-none"
                        : "border-gray-200"
                    } border w-full p-4 mt-1 rounded-lg bg-transparent`}
                  />
                  <p className="text-red-600">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <input
                    type="confirmPassword"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    placeholder="Confirm password..."
                    autoComplete="off"
                    className={`${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-600 focus:outline-none"
                        : "border-gray-200"
                    } border w-full p-4 mt-1 rounded-lg bg-transparent`}
                  />
                  <p className="text-red-600">
                    {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                  </p>
                  <div className="font-medium text-base text-blue-600 text-end my-4">
                    <a href="/auth">Click Here to Log in</a>
                  </div>
                  <div className="mt-8 flex flex-col gap-y-4">
                    <button
                      type="submit"
                      disabled={isRegistering}
                      className="hover:bg-white hover:text-blue-600 border hover:border-blue-600 py-4 rounded-xl bg-blue-600 text-white text-lg font-bold"
                    >
                      {isRegistering ? "Registering new user..." : "Register"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
