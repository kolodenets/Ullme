import { useEffect, useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../components/Button/Button";
import ParerPlane from "../../../public/assets/icons/PaperPlaneTilt.svg";
import ParerPlane32 from "../../../public/assets/icons/PaperPlaneTilt32.svg";
import ShareArrow from "../../../public/assets/icons/ShareFat.svg";
import ShareArrow32 from "../../../public/assets/icons/ShareFat32.svg";
import ShareNetwork32 from "../../../public/assets/icons/ShareNetwork32.svg";
import ShareNetwork20 from "../../../public/assets/icons/ShareNetwork20.svg";
import Copy20 from "../../../public/assets/svg/copyToClipboard20.svg";
import Copy32 from "../../../public/assets/svg/copyToClipboard32.svg";
import CardImg from "../../../public/assets/images/forCard.png";

import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import s from "./Result.module.scss";
import { checkSimilarity } from "../../shared/api/checkSimilarity";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";

import UISwiper from "../../components/Swiper/UISwiper";
import {
  toggleSharePopup,
  togglePostResultPopup,
  toggleSendLinkPopup,
} from "../../store/slices/popupsSlice";
import Popup from "../../components/Popup/Popup";

const ResultPage = () => {
  // const photo1 = localStorage.getItem("photo1");
  // const photo2 = localStorage.getItem("photo2");
  const size = useWindowDimensions();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const isSharePopupOpen = useSelector(
    (state: RootState) => state.popups.activeSharePopup
  );
  const isPostResultPopupOpen = useSelector(
    (state: RootState) => state.popups.activePostResultPopup
  );
  const isSendLinkPopupOpen = useSelector(
    (state: RootState) => state.popups.activeSendLinkPopup
  );

  const [percentage, setPercentage] = useState<number | undefined>(undefined);
  const [percentageToShow, setPercentageToShow] = useState<number>(0);
  const [visibleText, setVisibleText] = useState<boolean>(false);

  // const mainToken = localStorage.getItem("token1")!;
  // const compareToken = localStorage.getItem("token2")!;
  const photo1 = useSelector((state: RootState) => state.photos.photo1);
  const photo2 = useSelector((state: RootState) => state.photos.photo2);
  const mainToken = useSelector((state: RootState) => state.tokens.token1);
  const compareToken = useSelector((state: RootState) => state.tokens.token2);

  const getResult = async () => {
    if (mainToken && compareToken) {
      const result = await checkSimilarity(mainToken, compareToken);
      setPercentage(result?.data.match_percentage * 100);
    }
  };

  const printPercents = (percent: number) => {
    let current = 0;
    setTimeout(function go() {
      setPercentageToShow(Math.floor(current));
      if (current >= percent) {
        setVisibleText(true);
      }
      // if (current < percent) {
      //   if (current > 0.6 * percent) {
      //     setTimeout(go, 100);
      //   } else if (current > 0.75 * percent) {
      //     setTimeout(go, 50 + current * 2);
      //   } else if (current > 0.85 * percent) {
      //     setTimeout(go, 50 + current * 3);
      //   } else {
      //     setTimeout(go, 25);
      //   }
      // }
      if (current < percent) {
          setTimeout(go, 25);
        }
      current += percent/(100 + Math.sqrt(current))
      // current++;
    }, 25);
  };

  useEffect(() => {
    setTimeout(() => {
      setPercentage(0.86)
    }, 1000)
    // getResult();
  }, []);

  useEffect(() => {
    if (percentage) {
      printPercents(Math.floor(percentage*100));
    }
  }, [percentage]);

  return (
    <main className={s.homePageWrapper}>
      <section className={s.section}>
        <div className={s.container}>
          <h1 className={s.mainTitle}>
            Ullme AI service checked your photos and determined that:
          </h1>
          <div className={s.photosWrapper}>
            <div
              className={s.uploadedImage1}
              style={{ backgroundImage: photo1! }}
            ></div>
            <div
              className={s.uploadedImage2}
              style={{ backgroundImage: photo2! }}
            ></div>
          </div>

          <div className={s.resultContainer}>
            <p>{percentageToShow}%</p>
            <div className={s.bar}>
              <div
                className={s.resultNumber}
                style={{ width: `${percentageToShow}%` }}
              ></div>
            </div>
          </div>

          <p className={cn(s.resultText, { [s.visible]: visibleText })}>
            In the morning after waking up you can have a feeling that you're
            looking in the mirror. You look so much alike!
          </p>
          <Button
            className={s.checkSimilarityBig}
            onClick={() => navigate("/upload")}
          >
            Check similarity
          </Button>
          <div className={s.share}>
            <div
              className={s.shareResult}
              role="button"
              onClick={() => dispatch(toggleSharePopup(true))}
            >
              <img
                src={size.width < 768 ? ParerPlane : ParerPlane32}
                alt="img"
              />
              <span>Share the result with a friend</span>
            </div>
            <div
              className={s.shareResult}
              role="button"
              onClick={() => {
                dispatch(toggleSendLinkPopup(true));
              }}
            >
              <img
                src={size.width < 768 ? ShareArrow : ShareArrow32}
                alt="img"
              />
              <span>Share Ullme </span>
            </div>
          </div>
          <p className={s.post}>Post the results on social networks</p>
          <div className={s.slider}>
            <UISwiper
              photo1={photo1}
              photo2={photo2}
              percentage={percentageToShow}
              isVisibleText={visibleText}
            />
          </div>

          <div className={s.lastBlock}>
            <div
              className={s.shareResult}
              role="button"
              onClick={() => dispatch(togglePostResultPopup(true))}
            >
              <img
                src={size.width < 768 ? ShareNetwork20 : ShareNetwork32}
                alt="img"
              />
              <span>Publish</span>
            </div>
            {/* <div className={s.icons}>
              <img
                src={size.width < 768 ? Instagram : Instagram44}
                alt="instagram"
              />
              <img src={size.width < 768 ? Twitter : Twitter44} alt="twitter" />
              <img
                src={size.width < 768 ? Facebook : Facebook44}
                alt="facebook"
              />
            </div> */}
            <SocialNetworks
              onFacebookClick={() => {
                console.log("");
              }}
              onInstagramClick={() => {
                console.log("");
              }}
              onTwitterClick={() => {
                console.log("");
              }}
            />
          </div>
          <Button
            className={s.checkSimilarity}
            onClick={() => navigate("/upload")}
          >
            Check similarity
          </Button>
        </div>
      </section>
      <Popup
        className={s.customPopup}
        active={isSharePopupOpen}
        onClose={() => dispatch(toggleSharePopup(false))}
      >
        <div className={s.sharePopup}>
          <h1 className={s.popup__title}>Share the result with your friends</h1>
          <div className={s.popup__subtitle}>
            To share your results with friends, click on the icon of the desired
            social network
          </div>
          <div className={s.cardWrapper}>
            <div className={s.photosWrapper}>
              <div
                className={s.uploadedImage1}
                style={{ backgroundImage: photo1! }}
              ></div>
              <div
                className={s.uploadedImage2}
                style={{ backgroundImage: photo2! }}
              ></div>
            </div>

            <div className={s.resultContainer}>
              <p>{percentageToShow}%</p>
              <div className={s.bar}>
                <div
                  className={s.resultNumber}
                  style={{ width: `${percentageToShow}%` }}
                ></div>
              </div>
            </div>

            <p className={cn(s.resultText)}>
              In the morning after waking up you can have a feeling that you're
              looking in the mirror. You look so much alike!
            </p>
          </div>
          <SocialNetworks
            onFacebookClick={() => {
              console.log("");
            }}
            onInstagramClick={() => {
              console.log("");
            }}
            onTwitterClick={() => {
              console.log("");
            }}
          />
        </div>
      </Popup>
      <Popup
        className={s.customPopup}
        active={isPostResultPopupOpen}
        onClose={() => dispatch(togglePostResultPopup(false))}
      >
        <div className={s.postResultPopup}>
          <h1 className={s.popup__title}>
            Post the results on social networks
          </h1>
          <div className={s.popup__subtitle}>
            To share your results, click on the icon of the desired social
            network
          </div>
          <div className={s.cardWrapper}>
            <div className={s.photosWrapper}>
              <div
                className={s.uploadedImage1}
                style={{ backgroundImage: photo1! }}
              ></div>
              <div
                className={s.uploadedImage2}
                style={{ backgroundImage: photo2! }}
              ></div>
            </div>

            <div className={s.resultContainer}>
              <p>{percentageToShow}%</p>
              <div className={s.bar}>
                <div
                  className={s.resultNumber}
                  style={{ width: `${percentageToShow}%` }}
                ></div>
              </div>
            </div>

            <p className={cn(s.resultText)}>
              In the morning after waking up you can have a feeling that you're
              looking in the mirror. You look so much alike!
            </p>
          </div>
          <SocialNetworks
            onFacebookClick={() => {
              console.log("");
            }}
            onInstagramClick={() => {
              console.log("");
            }}
            onTwitterClick={() => {
              console.log("");
            }}
          />
        </div>
      </Popup>
      <Popup
        className={s.customPopup}
        active={isSendLinkPopupOpen}
        onClose={() => dispatch(toggleSendLinkPopup(false))}
      >
        <div className={s.sendLinkPopup}>
          <h1 className={s.popup__title}>Send a link to the Ullme</h1>
          <div className={s.popup__subtitle}>
            Do you like Ullme service? <br /> So send a link to the service to
            your friends and acquaintances
          </div>
          {/* <div className={s.card}>
            <img src="./assets/svg/UllmeCard.svg" alt="card" />
          </div> */}
          <div className={s.card}>
            <img src={CardImg} alt="" />
            <div className={s.card__inner}>
              <p className={s.card__title}>ULLME</p>
              <p className={s.card__subtitle}>AI service knows the answer!</p>
              <p className={s.card__text}>
                Is an artificial intelligence soft developed and trained on the
                basis of many years of scientific research <br /><br /> Scientists have
                proven that people who look like
              </p>
            </div>
          </div>
          <div className={s.bottomContainer}>
            <div
              className={s.shareResult}
              role="button"
              onClick={() => {
                dispatch(toggleSendLinkPopup(true));
              }}
            >
              <img src={size.width < 768 ? Copy20 : Copy32} alt="img" />
              <span>Copy the link Ullme </span>
            </div>
            <SocialNetworks
              onFacebookClick={() => {
                console.log("");
              }}
              onInstagramClick={() => {
                console.log("");
              }}
              onTwitterClick={() => {
                console.log("");
              }}
            />
          </div>
        </div>
      </Popup>
    </main>
  );
};

export default ResultPage;
