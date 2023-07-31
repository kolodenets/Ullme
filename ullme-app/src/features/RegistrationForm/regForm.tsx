import { forwardRef, useState, useImperativeHandle } from "react";
import { useForm, Controller } from "react-hook-form";
import cn from 'classnames'
// import { useDispatch } from "react-redux";

import Button from "../../components/Button/Button";
import Checkbox from "../../../public/assets/icons/checkbox.svg";
import Checkbox32 from "../../../public/assets/icons/checkbox32.svg";
import CheckboxChecked from "../../../public/assets/icons/checkbox-checked.svg";
import CheckboxChecked32 from "../../../public/assets/icons/checkbox-checked32.svg";
import RedStar from "../../../public/assets/icons/littleRedStar.svg";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import { registerUser } from "../../shared/api/auth";
import s from "./form.module.scss";

export interface RegistrationParams {
  email: string;
  username: string;
  password: string;
}

// import {
//   toggleCreateAccountAlert,
//   toggleCheckEmailPopup,
// } from "../../store/slices/alertsSlice";

const RegForm = forwardRef((_, ref) => {

  const [isPolicyChecked, setIsPolicyChecked] = useState(false);

  const size = useWindowDimensions();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "111111",
    },
    mode: "onSubmit",
  });

  useImperativeHandle(ref, () => ({
    resetForm() {
      reset();
    },
  }));

  const onSubmit = async (data: RegistrationParams) => {
    const result = await registerUser(data);
  };

  const handleClick = () => {
    // dispatch(toggleRegistration(false));
    // dispatch(toggleLogin(true));
  };

  return (
    <div className={s.form__wrapper}>
      <p className={s.form__title}>Sign up</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form__control}>
          <label>
            <div className={s.label__content}>
              <img src={RedStar} alt="star" />
              <span>Name</span>
            </div>{" "}
          </label>
          <input
            minLength={2}
            maxLength={25}
            type="text"
            {...register("username", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 2,
                matchPattern: (value) =>
                  /(^[a-zA-Zа-яА-Я0-9.,-]+)(\s?[a-zA-Zа-яА-Я0-9.,-]+)+$/.test(
                    value
                  ),
              },
            })}
          />
          <span className={s.underInputText}>Please input  Name or delete this field.</span>
          {errors.username?.type === "required" && (
            <p className={s.errorMsg}>Введите имя.</p>
          )}
          {/* {errors.username?.type === "checkLength" && (
            <p className={s.errorMsg}>Имя должно содержать от 2 до 25 символов</p>
          )} */}
        </div>
        <div className={s.form__control}>
        <label>
            <div className={s.label__content}>
              <img src={RedStar} alt="star" />
              <span>Email</span>
            </div>{" "}
          </label>
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

        {/* <div className="form__control">
          <label>Пароль*</label>
          <div
            className={passwordVisibility ? "icon visible" : "icon hidden"}
            onClick={() => setPasswordVisibility(!passwordVisibility)}
          ></div>
          <input
            type={passwordVisibility ? "text" : "password"}
            {...register("password", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 7 && value.length <= 25,
                matchPattern: (value) =>
                  // /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)?[\\\/\|.,'";>:<[\]{\}\(\)+~!?@#$%^&*_-]/.test(
                  /^([a-zA-Z0-9\\/|.,'";>:<[\]{}()+~!?@#$%^&*_-])+$/.test(
                    value
                  ),
              },
            })}
          />
          <p className="password-helper">Не менее 7 символов</p>
          {errors.password?.type === "required" && (
            <p className="errorMsg">Требуется ввести пароль.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="errorMsg">
              Недостаточная длина пароля. Пароль должен содержать не менее 7
              символов.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="errorMsg">
              Использование недопустимых знаков. Пароль может содержать только
              латинские буквы, цифры, специальные символы
            </p>
          )}
        </div> */}
        <div className={s.policyTerms}>
          <label htmlFor="policy-form" className={cn(s.checkBox)}>
            <img
              src={
                isPolicyChecked
                  ? size.width < 768
                    ? CheckboxChecked
                    : CheckboxChecked32
                  : size.width < 768
                  ? Checkbox
                  : Checkbox32
              }
              alt="checkbox"
            />
            <input
              type="checkbox"
              style={{ display: "none" }}
              name="policy-form"
              id="policy-form"
              checked={isPolicyChecked}
              onChange={() => setIsPolicyChecked(!isPolicyChecked)}
            />
          </label>
          <p className={s.agreement}>
            You agree to our{" "}
            <a href="" className={s.link}>
              Terms & Conditions
            </a>{" "}
            and you have read and understood our{" "}
            <a href="" className={s.link}>
              Privacy Policy
            </a>{" "}
          </p>
        </div>

          <Button className={s.signUp} type="submit" disabled={!isPolicyChecked}>
            Sign Up
          </Button>

      </form>
    </div>
  );
});

export default RegForm;
