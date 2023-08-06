import s from "./errorPage.module.scss";
import ErrorImage from "../../../public/assets/icons/errorPage.svg";
const ErrorPage = () => {
  return (
    <main className={s.errorPageWrapper}>
      <div className={s.container}>
        <div className={s.errorImgContainer}>
          <img src={ErrorImage} alt="error" />
        </div>
        <p className={s.text}>Try the comparison later or contact technical support.</p>
        <div className={s.support}>
          <a href="mailto:contact@ullme.com">Technical support contact</a>
          </div>
      </div>
    </main>
  );
};

export default ErrorPage;
