import { Formik } from "formik";
import { signUpValidationSchema } from "../schema/validationSchema";

const SignUpForm = () => {

  const onSubmit = (values: any) => {
    // Alert the input values of the form that we filled
    alert(JSON.stringify(values));
  }

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border border-gray-300">
      <h1 className="text-4xl font-semibold">Login</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
       Please provide your email and password to signup
      </p>
      <div className="mt-8">
        <Formik
          validationSchema={signUpValidationSchema}
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
                    className={`${
                      errors.password && touched.password
                        ? "border-red-600 focus:outline-none"
                        : "border-gray-200"
                    } border w-full p-4 mt-1 rounded-lg bg-transparent`}
                  />
                  <p className="text-red-600">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <div className="font-medium text-base text-blue-600 text-end my-4">
                    <a href="/auth">Click Here to Log in</a>
                  </div>
                  <div className="mt-8 flex flex-col gap-y-4">
                    <button
                      type="submit"
                      className="hover:bg-white hover:text-blue-600 border hover:border-blue-600 py-4 rounded-xl bg-blue-600 text-white text-lg font-bold"
                    >
                      Sign up
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
