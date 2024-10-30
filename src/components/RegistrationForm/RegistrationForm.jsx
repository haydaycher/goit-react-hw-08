import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("Submitting values:", values); // Логування даних перед відправкою
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" className={css.input} required />{" "}
          {/* Обов'язкове поле */}
        </label>
        <label className={css.label}>
          Email
          <Field
            type="email"
            name="email"
            className={css.input}
            required
          />{" "}
          {/* Обов'язкове поле */}
        </label>
        <label className={css.label}>
          Password
          <Field
            type="password"
            name="password"
            className={css.input}
            required
          />{" "}
          {/* Обов'язкове поле */}
        </label>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
