import { useEffect, useState } from "react";
import cn from "classnames";

import Camera from "../../../public/assets/icons/cameraIcon.svg";
import CameraBig from "../../../public/assets/icons/Camera120.svg";
import Checkbox from "../../../public/assets/icons/checkbox.svg";
import Checkbox32 from "../../../public/assets/icons/checkbox32.svg";
import CheckboxChecked from "../../../public/assets/icons/checkbox-checked.svg";
import CheckboxChecked32 from "../../../public/assets/icons/checkbox-checked32.svg";
import { uploadPhoto } from "../../shared/api/upload";
import Button from "../../components/Button/Button";
import { convertFile } from "../../shared/helpers/convertFile";
import s from "./Upload.module.scss";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";

const UploadPage = () => {
  const [error1, setError1] = useState(false);
  const [photo1, setPhoto1] = useState(false);
  const [error2, setError2] = useState(false);
  const [photo2, setPhoto2] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [policyChecked, setPolicyChecked] = useState(false);
  const [uploadedPhoto1, setUploadedPhoto1] = useState<File | null>(null);
  const [uploadedPhoto2, setUploadedPhoto2] = useState<File | null>(null);

  const size = useWindowDimensions();

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
              console.log("");
            }}
          >
            Check similarity
          </Button>
        </div>
      </section>
    </main>
  );
};

export default UploadPage;
