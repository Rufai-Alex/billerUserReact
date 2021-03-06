import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Full-Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  phoneNumber: Yup.number().required("Please provide your phone number"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

export const validationAirtimePuchase = Yup.object().shape({
  network: Yup.string().required("You must choose a network"),
  phone_number: Yup.number().required("Please provide your phone number"),
  amount: Yup.number().required("Please enter amount"),
});
