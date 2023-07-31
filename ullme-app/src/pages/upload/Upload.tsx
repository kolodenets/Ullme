import { useEffect, useState, useRef } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

import Camera from "../../../public/assets/icons/cameraIcon.svg";
import CameraBig from "../../../public/assets/icons/Camera120.svg";
import Checkbox from "../../../public/assets/icons/checkbox.svg";
import Checkbox32 from "../../../public/assets/icons/checkbox32.svg";
import CheckboxChecked from "../../../public/assets/icons/checkbox-checked.svg";
import CheckboxChecked32 from "../../../public/assets/icons/checkbox-checked32.svg";
import { uploadPhoto } from "../../shared/api/upload";
import Button from "../../components/Button/Button";
import { convertFile } from "../../shared/helpers/convertFile";
import Popup from "../../components/Popup/Popup";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import s from "./Upload.module.scss";
import { UseFormProps } from "react-hook-form";
import RegForm from "../../features/RegistrationForm/regForm";

const UploadPage = () => {
  const [error1, setError1] = useState(false);
  const [photo1, setPhoto1] = useState(true);
  const [error2, setError2] = useState(false);
  const [photo2, setPhoto2] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [policyChecked, setPolicyChecked] = useState(true);
  const [uploadedPhoto1, setUploadedPhoto1] = useState<File | null>(null);
  const [uploadedPhoto2, setUploadedPhoto2] = useState<File | null>(null);

  const [openLimitPopup, setOpenLimitPopup] = useState(false);
  const [openSignUpPopup, setOpenSignUpPopup] = useState(false);
  const regFormRef = useRef<UseFormProps<FormData>>(null);
  const navigate = useNavigate();

  const size = useWindowDimensions();

  const handleSignupClick = () => {
    setOpenLimitPopup(false);
    setOpenSignUpPopup(true);
  };

  const handleSignup = () => {
    console.log("");
  };

  useEffect(() => {
    if (photo1 && photo2 && policyChecked) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [photo1, photo2, policyChecked]);
  return (
    <main className={s.homePageWrapper}>
      <section className={s.section}>
        <div className={s.container}>
          <h1 className={s.mainTitle}>
            Upload your photos to check your similarity
          </h1>
          <h4 className={s.mainSubtitle}>
            A good example of a photo is selfies
          </h4>
          <div className={s.inputsWrapper}>
            <div className={s.inputContainer}>
              <label
                htmlFor="file-upload1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                {uploadedPhoto1 ? (
                  <div
                    className={s.uploadedImage}
                    style={{ backgroundImage: convertFile(uploadedPhoto1) }}
                  ></div>
                ) : (
                  <div className={cn(s.uploadCircle, { [s.error]: error1 })}>
                    <img
                      src={size.width < 768 ? Camera : CameraBig}
                      alt="photo"
                    />
                    <span>upload</span>
                  </div>
                )}

                <input
                  type="file"
                  name="file-upload1"
                  id="file-upload1"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    if (e.target.files) {
                      uploadPhoto(e.target.files[0]).then((result) => {
                        if (!result?.status) {
                          setError1(true);
                        } else {
                          setUploadedPhoto1(e.target.files![0]);
                          setPhoto1(true);
                          setError1(false);
                          localStorage.setItem(
                            "photo1",
                            convertFile(e.target.files![0])
                          );
                          localStorage.setItem("token1", result.data.token);
                        }
                      });
                    }
                  }}
                />
              </label>
              <p className={cn(s.errorMessage, { [s.hidden]: !error1 })}>
                The face is not detected. Choose a different photo.
              </p>
            </div>
            <div className={s.inputContainer}>
              <label
                htmlFor="file-upload2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                {uploadedPhoto2 ? (
                  <div
                    className={s.uploadedImage}
                    style={{ backgroundImage: convertFile(uploadedPhoto2) }}
                  ></div>
                ) : (
                  <div className={cn(s.uploadCircle, { [s.error]: error2 })}>
                    <img
                      src={size.width < 768 ? Camera : CameraBig}
                      alt="photo"
                    />
                    <span>upload</span>
                  </div>
                )}
                <input
                  type="file"
                  name="file-upload2"
                  id="file-upload2"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    if (e.target.files) {
                      uploadPhoto(e.target.files[0]).then((result) => {
                        if (!result?.status) {
                          setError2(true);
                        } else {
                          setUploadedPhoto2(e.target.files![0]);
                          setPhoto2(true);
                          setError2(false);
                          localStorage.setItem(
                            "photo2",
                            convertFile(e.target.files![0])
                          );
                          localStorage.setItem("token2", result.data.token);
                        }
                      });
                    }
                  }}
                />
              </label>
              <p className={cn(s.errorMessage, { [s.hidden]: !error2 })}>
                The face is not detected. Choose a different photo.
              </p>
            </div>
          </div>
          <div className={s.policyTerms}>
            <label htmlFor="policy-check" className={cn(s.checkBox)}>
              <img
                src={
                  policyChecked
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
                name="policy-check"
                id="policy-check"
                checked={policyChecked}
                onChange={() => setPolicyChecked(!policyChecked)}
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
          <Button
            className={s.checkSimilarity}
            disabled={isDisabled}
            onClick={() => {
              const tryNumber = Number(localStorage.getItem("tryNumber")) ?? 1;
              if (tryNumber < 3) {
                navigate("/result");
                localStorage.setItem("tryNumber", `${tryNumber + 1}`);
              } else {
                setOpenLimitPopup(true);
              }
            }}
          >
            Check similarity
          </Button>
        </div>
        <Popup active={openLimitPopup} onClose={() => setOpenLimitPopup(false)}>
          <div className={s.popup}>
            <h1 className={s.popup__title}>Limit exhausted</h1>
            <div className={s.popup__list}>
              You have reached the limit of comparisons, please register and
              purchase a paid subscription.
            </div>
            <Button className={s.signUp} onClick={handleSignupClick}>
              Sign Up
            </Button>
          </div>
        </Popup>
        <Popup
          active={openSignUpPopup}
          className={s.customPopup}
          onClose={() => {
            setOpenSignUpPopup(false);
            (regFormRef as any)?.current?.resetForm();
          }}
        >
          <div className={s.regPopup}>
            <RegForm ref={regFormRef} />
          </div>
        </Popup>
      </section>
    </main>
  );
};

export default UploadPage;
