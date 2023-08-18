import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be 3 characters long")
      .required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = () => {
    alert("Thanks For Joining us!");
  };

  return (
    <div className="section flex flex-col justify-center" id="contact">
      <h1 className="text-5xl font-bold sm:text-2xl">Fill this form!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <form
            className="flex flex-col bg-black/25 justify-center p-10 rounded-lg"
            onSubmit={props.handleSubmit}
          >
            <div>
              <label>Username</label>
              <Field
                type="text"
                name="username"
                placeholder="Your username here"
                className="ml-9 my-2 w-96 rounded-lg text-black"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-700"
              />
            </div>
            <div>
              <label className="my-3">Email address</label>
              <Field
                type="email"
                name="email"
                placeholder="name@example.com"
                className="ml-2 my-2 w-96 rounded-lg text-black"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-700"
              />
            </div>
            <div>
              <label className="my-3">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Your password here"
                className="ml-10 my-2 w-96 rounded-lg text-black"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-700"
              />
            </div>
            <div>
              <label className="my-3">C Password</label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="ml-6 my-2 w-96 rounded-lg text-black"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-700"
              />
            </div>
            <button
              type="submit"
              className="my-2 bg-blue-600 rounded-lg"
              disabled={
                props.values.username === "" ||
                props.values.email === "" ||
                props.values.password === "" ||
                props.values.confirmPassword === ""
              }
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
