import { forwardRef, useState, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
// import { useDispatch } from "react-redux";

import Button from "../../components/Button/Button";
import Checkbox from "../../../public/assets/icons/checkbox.svg";
import Checkbox32 from "../../../public/assets/icons/checkbox32.svg";
import CheckboxChecked from "../../../public/assets/icons/checkbox-checked.svg";
import CheckboxChecked32 from "../../../public/assets/icons/checkbox-checked32.svg";
import ClearField from "../../../public/assets/icons/clearField.svg";
import RedStar from "../../../public/assets/icons/littleRedStar.svg";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
// import { registerUser } from "../../shared/api/auth";
import { AppDispatch } from "../../store/store";
import { toggleRegistration } from "../../store/slices/formsSlice";
import { toggleThanksPopup } from "../../store/slices/popupsSlice";
import s from "./form.module.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../../shared/api/auth";

export interface RegistrationParams {
  email: string;
  username: string;
  password: string | number;
}

// import {
//   toggleCreateAccountAlert,
//   toggleCheckEmailPopup,
// } from "../../store/slices/alertsSlice";

const RegForm = forwardRef((_, ref) => {
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);

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
      username: "",
      password: 111111,
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
    console.log(result?.data)
    dispatch(toggleRegistration(false));
    dispatch(toggleThanksPopup(true));
    reset();
    // if(result?.data) {
    // }
  };

  const handleClearName = () => resetField("username");
  const handleClearEmail = () => resetField("email");

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
          <div className={s.inputField}>
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
            <button type="button" onClick={handleClearName}>
              <img src={ClearField} alt="clear" />
            </button>
          </div>

          <span className={s.underInputText}>
            Please input Name or delete this field.
          </span>
          {errors.username?.type === "required" && (
            <p className={s.errorMsg}>Name is required</p>
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
            />
            <button type="button" onClick={handleClearEmail}>
              <img src={ClearField} alt="clear" />
            </button>
          </div>

          <span className={s.underInputText}>
            Please input Email or delete this field.
          </span>
          {errors.email?.type === "required" && (
            <p className={s.errorMsg}>Email is required</p>
          )}
          {errors.email?.type === "matchPattern" && (
            <p className={s.errorMsg}>
              Check the correctness of the entered e-mail
            </p>
          )}
        </div>

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
