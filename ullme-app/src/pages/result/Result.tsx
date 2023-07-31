import { useEffect, useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import Photo from "../../../public/assets/images/default.png";
import Button from "../../components/Button/Button";
import ParerPlane from "../../../public/assets/icons/PaperPlaneTilt.svg";
import ParerPlane32 from "../../../public/assets/icons/PaperPlaneTilt32.svg";
import ShareArrow from "../../../public/assets/icons/ShareFat.svg";
import ShareArrow32 from "../../../public/assets/icons/ShareFat32.svg";
import ShareNetwork32 from "../../../public/assets/icons/ShareNetwork32.svg";
import ShareNetwork20 from "../../../public/assets/icons/ShareNetwork20.svg";
import Instagram from "../../../public/assets/icons/InstagramLogo.svg";
import Instagram44 from "../../../public/assets/icons/InstagramLogo44.svg";
import Twitter from "../../../public/assets/icons/TwitterLogo.svg";
import Twitter44 from "../../../public/assets/icons/TwitterLogo44.svg";
import Facebook from "../../../public/assets/icons/fi_facebook.svg";
import Facebook44 from "../../../public/assets/icons/fi_facebook44.svg";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import s from "./Result.module.scss";
import { checkSimilarity } from "../../shared/api/checkSimilarity";

const ResultPage = () => {
  const photo1 = localStorage.getItem("photo1");
  const photo2 = localStorage.getItem("photo2");
  const size = useWindowDimensions();
  const navigate = useNavigate();

  const [percentage, setPercentage] = useState<number | undefined>(undefined);
  const [percentageToShow, setPercentageToShow] = useState<number>(0);
  const [visibleText, setVisibleText] = useState<boolean>(false);

  const mainToken = localStorage.getItem("token1")!;
  const compareToken = localStorage.getItem("token2")!;

  const getResult = async () => {
    const result = await checkSimilarity(mainToken, compareToken);
    setPercentage(result?.data.match_percentage * 100);
  };

  const printPercents = (percent: number) => {
    let current = 0;
    setTimeout(function go() {
      setPercentageToShow(current);
      if(current == percent) {
        setVisibleText(true)
      }
      if (current < percent) {
        if (current > 0.6 * percent) {
          setTimeout(go, 100);
        } else if (current > 0.75 * percent) {
          setTimeout(go, 50 + current * 2);
        } 
        else if (current > 0.85 * percent) {
          setTimeout(go, 50 + current * 3);
        } 
        else {
          setTimeout(go, 50);
        }
      }
      current++;
    }, 50);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   setPercentage(0.86)
    // }, 1500)
    getResult();
  }, []);

  useEffect(() => {
    if (percentage) {
      printPercents(Math.floor(percentage));
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

          <p className={cn(s.resultText, {[s.visible]: visibleText})}>
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
              onClick={() => {
                console.log("");
              }}
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
                console.log("");
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
          <div className={s.slider}></div>
          <div className={s.lastBlock}>
            <div
              className={s.shareResult}
              role="button"
              onClick={() => {
                console.log("");
              }}
            >
              <img
                src={size.width < 768 ? ShareNetwork20 : ShareNetwork32}
                alt="img"
              />
              <span>Publish</span>
            </div>
            <div className={s.icons}>
              <img
                src={size.width < 768 ? Instagram : Instagram44}
                alt="instagram"
              />
              <img src={size.width < 768 ? Twitter : Twitter44} alt="twitter" />
              <img
                src={size.width < 768 ? Facebook : Facebook44}
                alt="facebook"
              />
            </div>
          </div>
          <Button
            className={s.checkSimilarity}
            onClick={() => navigate("/upload")}
          >
            Check similarity
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ResultPage;
