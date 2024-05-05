import { Formik } from "formik";
import { loginValidationSchema } from "../schema/validationSchema";
import {
  doSignInWithEmailAndPassword,
  doSingInWithGoogle
} from "../../../firebase/auth";
import { useAuth } from "../../../contexts/authContext";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const user = useAuth();

  const [isUserSigningIn, setIsUserSigningIn] = useState(false);

  const onSubmit = async (values: any) => {
    if (!isUserSigningIn) {
      setIsUserSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(values.email, values.password).then(
          (response: any) => {
            console.log("User Login : ", response);
          }
        );
      } catch (error) {
        console.error(error);
        setIsUserSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async () => {
    if (!isUserSigningIn) {
      setIsUserSigningIn(true);
      try {
        await doSingInWithGoogle().then((response: any) => {
          console.log("User Login (Google) : ", response);
        });
      } catch (error) {
        console.error(error);
        setIsUserSigningIn(false);
      }
    }
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border border-gray-300">
      {user && <Navigate to={"/home"} replace={true} />}
      <h1 className="text-4xl font-semibold">Login</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome back, please enter your username and password
      </p>
      <div className="mt-8">
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
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
                    autoComplete="off"
                    className={`${
                      errors.password && touched.password
                        ? "border-red-600 focus:outline-none"
                        : "border-gray-200"
                    } border w-full p-4 mt-1 rounded-lg bg-transparent`}
                  />
                  <p className="text-red-600">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <div className="font-medium text-basetext-end my-4">
                    You don't have an account?{" "}
                    <a
                      href="/signup"
                      className="text-blue-400 hover:text-blue-600 "
                    >
                      Sign Up
                    </a>
                  </div>
                  <div className="mt-8 flex flex-col gap-y-4">
                    <button
                      type="submit"
                      disabled={isUserSigningIn}
                      className="hover:bg-white hover:text-blue-600 border hover:border-blue-600 py-4 rounded-xl bg-blue-600 text-white text-lg font-bold"
                    >
                      {isUserSigningIn ? "Signing in..." : "Sign in"}
                    </button>
                    <button
                      type="button"
                      disabled={isUserSigningIn}
                      onClick={onGoogleSignIn}
                      className="flex items-center justify-center gap-2 text-lg font-bold py-4 rounded-xl border border-gray-200 hover:bg-gray-200 hover:text-blue-600"
                    >
                      <img alt="Logo" src={"images/google-logo.png"} />
                      Sign in with Google
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

export default LoginForm;
