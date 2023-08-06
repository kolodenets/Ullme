import { useEffect, useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import heic2any from "heic2any";

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

import { AppDispatch, RootState } from "../../store/store";
import { toggleRegistration, toggleLogin } from "../../store/slices/formsSlice";
import s from "./Upload.module.scss";
import { toggleThanksPopup } from "../../store/slices/popupsSlice";
import { setToken1, setToken2 } from "../../store/slices/tokensSlice";
import { setPhoto1, setPhoto2 } from "../../store/slices/photosSlice";

const UploadPage = () => {
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [policyChecked, setPolicyChecked] = useState(false);

  const activeThanksPopup = useSelector(
    (state: RootState) => state.popups.activeThanksPopup
  );
  const uploadedPhoto1 = useSelector((state: RootState) => state.photos.photo1);
  const uploadedPhoto2 = useSelector((state: RootState) => state.photos.photo2);
  const dispatch: AppDispatch = useDispatch();

  const [openLimitPopup, setOpenLimitPopup] = useState(false);

  const navigate = useNavigate();

  const size = useWindowDimensions();

  const handleSignupClick = () => {
    setOpenLimitPopup(false);
    dispatch(toggleRegistration(true));
  };
  const handleLoginClick = () => {
    dispatch(toggleThanksPopup(false));
    dispatch(toggleLogin(true));
  };

  useEffect(() => {
    if (uploadedPhoto1 && uploadedPhoto2 && policyChecked) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [uploadedPhoto1, uploadedPhoto2, policyChecked]);

  useEffect(() => {
    dispatch(setPhoto1(null));
    dispatch(setPhoto2(null));
    dispatch(setToken1(null));
    dispatch(setToken2(null));
  }, []);
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
                    style={{ backgroundImage: uploadedPhoto1 }}
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
                  onChange={async (e) => {
                    if (e.target.files) {
                      let photo: Blob | Blob[] | File = e.target.files![0];
                      if (
                        photo.type === "" ||
                        photo.type === "image/heic" ||
                        photo.type === "image/heif" ||
                        photo.type === "image/heif-sequence" ||
                        photo.type === "image/heic-sequence"
                      ) {
                        photo = await heic2any({
                          blob: photo,
                          toType: "image/jpeg",
                          quality: 95
                        });
                      }
                      dispatch(setPhoto1(convertFile(photo as Blob)));
                      uploadPhoto(photo as Blob).then((result) => {
                        if (!result?.status) {
                          setError1(true);
                        } else {
                          setError1(false);
                          dispatch(setPhoto1(convertFile(photo as Blob)));
                          dispatch(setToken1(result.data.token));
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
                    style={{ backgroundImage: uploadedPhoto2 }}
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
                  onChange={async (e) => {
                    if (e.target.files) {
                      let photo: Blob | Blob[] | File = e.target.files![0];
                      if (
                        photo.type === "" ||
                        photo.type === "image/heic" ||
                        photo.type === "image/heif" ||
                        photo.type === "image/heif-sequence" ||
                        photo.type === "image/heic-sequence"
                      ) {
                        photo = await heic2any({
                          blob: photo,
                          toType: "image/jpeg",
                        });
                      }
                      dispatch(setPhoto2(convertFile(photo as Blob)));
                      uploadPhoto(photo as Blob).then((result) => {
                        if (!result?.status) {
                          setError2(true);
                        } else {
                          setError2(false);
                          dispatch(setPhoto2(convertFile(photo as Blob)));
                          dispatch(setToken2(result.data.token));
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
              if (tryNumber < 100) {
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
          active={activeThanksPopup}
          onClose={() => dispatch(toggleThanksPopup(false))}
        >
          <div className={s.thanksPopup}>
            <h1 className={s.popup__title}>Thank you for registering!</h1>
            <div className={s.popup__list}>
              At the moment due to technical reasons{" "}
              {size.width > 768 && <br />} we do not accept payments. <br />
              We apologize and give you 30 days free of charge.
            </div>
            <Button className={s.signUp} onClick={handleLoginClick}>
              Log in
            </Button>
          </div>
        </Popup>
      </section>
    </main>
  );
};

export default UploadPage;
