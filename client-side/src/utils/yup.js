import * as Yup from "yup";

const loginValidations = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Minimum 8 characters"),
});

export { loginValidations };
