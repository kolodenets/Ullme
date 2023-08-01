import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import cn from 'classnames'


import Button from "../../components/Button/Button";
import RedStar from "../../../public/assets/icons/littleRedStar.svg";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import { loginUser } from "../../shared/api/auth";
import { AppDispatch } from "../../store/store";
import { toggleLogin } from "../../store/slices/formsSlice";
import { useDispatch } from "react-redux";
import ClearField from "../../../public/assets/icons/clearField.svg";

import s from "./loginForm.module.scss";
export interface LoginParams {
  email: string;
  password: string
}

// import {
//   toggleCreateAccountAlert,
//   toggleCheckEmailPopup,
// } from "../../store/slices/alertsSlice";

const LoginForm = forwardRef((_, ref) => {

  const size = useWindowDimensions();
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

  const onSubmit = async (data: LoginParams) => {
    const result = await loginUser(data);
    dispatch(toggleLogin(false))

    reset();
    // if(result?.data) {
    // }
  };

  const handleClearEmail = () => resetField('email')


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
          
          <span className={s.underInputText}>Please input  Email or delete this field.</span>
          {errors.email?.type === "required" && (
            <p className={s.errorMsg}>Введите адрес электронной почты.</p>
          )}
          {/* {errors.email?.type === "matchPattern" && (
            <p className="errorMsg">
              Проверьте правильность введения электронной почты.
            </p>
          )} */}
        </div>

          <Button className={s.signUp} type="submit">
            Log in
          </Button>

      </form>
    </div>
  );
});

export default LoginForm;
