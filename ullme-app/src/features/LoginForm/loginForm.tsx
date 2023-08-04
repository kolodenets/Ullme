import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";

import Button from "../../components/Button/Button";
import RedStar from "../../../public/assets/icons/littleRedStar.svg";
// import { loginUser } from "../../shared/api/auth";
import { AppDispatch } from "../../store/store";
import { toggleLogin, toggleRegistration } from "../../store/slices/formsSlice";
import { useDispatch } from "react-redux";
import ClearField from "../../../public/assets/icons/clearField.svg";

import s from "./loginForm.module.scss";
export interface LoginParams {
  email: string;
  password: string;
}

// import {
//   toggleCreateAccountAlert,
//   toggleCheckEmailPopup,
// } from "../../store/slices/alertsSlice";

const LoginForm = forwardRef((_, ref) => {

  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "111111",
    },
    mode: "onSubmit",
  });

  useImperativeHandle(ref, () => ({
    resetForm() {
      reset();
    },
  }));

  const onSubmit = async () => {
    // const result = await loginUser(data);
    dispatch(toggleLogin(false));

    reset();
    // if(result?.data) {
    // }
  };

  const handleClearEmail = () => resetField("email");
  const handleSignupClick = () => {
    dispatch(toggleRegistration(true))
    dispatch(toggleLogin(false))
  }

  return (
    <div className={s.form__wrapper}>
      <p className={s.form__title}>Log in</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form__control}>
          <label>
            <div className={s.label__content}>
              <img src={RedStar} alt="star" />
              <span>Email</span>
            </div>{" "}
          </label>
          <div className={s.inputField}>
            <input
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                      value
                    ),
                },
                // pattern:
                //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              // placeholder="user_name@gmail.com"
            />
            <button type="button" onClick={handleClearEmail}>
              <img src={ClearField} alt="clear" />
            </button>
          </div>

          <p className={s.underInputText}>
            Please input Email or delete this field.
          </p>
          {errors.email?.type === "required" && (
            <p className={s.errorMsg}>Email is required</p>
          )}
          {errors.email?.type === "matchPattern" && (
            <p className={s.errorMsg}>
              Check the correctness of the entered e-mail
            </p>
          )}
        </div>
        <p className={s.bottomText}>
          Dont’t have an account? <span className={s.signInLink} role="button" onClick={handleSignupClick}>Sign in!</span>{" "}
        </p>

        <Button className={s.signUp} type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
});

export default LoginForm;
