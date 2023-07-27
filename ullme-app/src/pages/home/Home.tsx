import cn from "classnames";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import Circle from "/assets/icons/Status-Normal.svg";
import CircleWeb from "/assets/icons/Status-Normal-web.svg";
import Photo from "/assets/icons/photo.svg";
import PhotoMob from "/assets/icons/photoMob.svg";
import ThirdImage from "/assets/icons/thirdImage.svg";
import Parents from "/assets/icons/parents.svg";
import Popup from "../../components/Popup/Popup";

import MainImage from "/assets/icons/mainImage.svg";

import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import s from "./Home.module.scss";
import { useState } from "react";

const Home = () => {
  const size = useWindowDimensions();

  const navigate = useNavigate();

  const [isPopupOPen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <main className={s.homePageWrapper}>
      <section className={s.heroSection}>
        <div className={s.heroContent}>
          <div className={s.heroContainer}>
            <div className={s.heroBody}>
              <h1 className={s.mainTitle}>ULLME</h1>
              <h4 className={s.mainSubtitle}>AI service knows the answer!</h4>
              <p className={s.mainInfo}>
                Is an artificial intelligence soft developed and trained on the
                basis of many years of scientific research. <br />
                <br />
                Scientists have proven that people who look like each other are
                attracted to each other. <br />
                It is laid down by nature. <br /> <br />
                You can read more here
                <span
                  className={s.svg}
                  role="button"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7.5 11.4375H16.5C16.6492 11.4375 16.7923 11.4968 16.8977 11.6023C17.0032 11.7077 17.0625 11.8508 17.0625 12C17.0625 12.1492 17.0032 12.2923 16.8977 12.3977C16.7923 12.5032 16.6492 12.5625 16.5 12.5625H7.5C7.35082 12.5625 7.20774 12.5032 7.10225 12.3977C6.99676 12.2923 6.9375 12.1492 6.9375 12C6.9375 11.8508 6.99676 11.7077 7.10225 11.6023C7.20774 11.4968 7.35082 11.4375 7.5 11.4375ZM9.75 15.9375H6C4.95571 15.9375 3.95419 15.5227 3.21577 14.7842C2.47734 14.0458 2.0625 13.0443 2.0625 12C2.0625 10.9557 2.47734 9.95419 3.21577 9.21577C3.95419 8.47734 4.95571 8.0625 6 8.0625H9.75C9.89918 8.0625 10.0423 8.00324 10.1477 7.89775C10.2532 7.79226 10.3125 7.64918 10.3125 7.5C10.3125 7.35082 10.2532 7.20774 10.1477 7.10225C10.0423 6.99676 9.89918 6.9375 9.75 6.9375H6C4.65734 6.9375 3.36967 7.47087 2.42027 8.42027C1.47087 9.36967 0.9375 10.6573 0.9375 12C0.9375 13.3427 1.47087 14.6303 2.42027 15.5797C3.36967 16.5291 4.65734 17.0625 6 17.0625H9.75C9.89918 17.0625 10.0423 17.0032 10.1477 16.8977C10.2532 16.7923 10.3125 16.6492 10.3125 16.5C10.3125 16.3508 10.2532 16.2077 10.1477 16.1023C10.0423 15.9968 9.89918 15.9375 9.75 15.9375ZM18 6.9375H14.25C14.1008 6.9375 13.9577 6.99676 13.8523 7.10225C13.7468 7.20774 13.6875 7.35082 13.6875 7.5C13.6875 7.64918 13.7468 7.79226 13.8523 7.89775C13.9577 8.00324 14.1008 8.0625 14.25 8.0625H18C19.0443 8.0625 20.0458 8.47734 20.7842 9.21577C21.5227 9.95419 21.9375 10.9557 21.9375 12C21.9375 13.0443 21.5227 14.0458 20.7842 14.7842C20.0458 15.5227 19.0443 15.9375 18 15.9375H14.25C14.1008 15.9375 13.9577 15.9968 13.8523 16.1023C13.7468 16.2077 13.6875 16.3508 13.6875 16.5C13.6875 16.6492 13.7468 16.7923 13.8523 16.8977C13.9577 17.0032 14.1008 17.0625 14.25 17.0625H18C19.3427 17.0625 20.6303 16.5291 21.5797 15.5797C22.5291 14.6303 23.0625 13.3427 23.0625 12C23.0625 10.6573 22.5291 9.36967 21.5797 8.42027C20.6303 7.47087 19.3427 6.9375 18 6.9375Z"
                      fill="#1890FF"
                    />
                  </svg>
                </span>
              </p>
              <Button
                className={s.checkSimilarity}
                onClick={() => navigate('/upload')}
              >
                Check similarity
              </Button>
              <div className={s.mainImageContainerAbsolut}>
                <img src={MainImage} alt="mainImage" />
              </div>
            </div>
          </div>
        </div>
        <div className={s.mainImageContainer}>
          <img src={MainImage} alt="mainImage" className={s.mainImage} />
          {/* <div className={s.percentage}>
            <img src={Percent} alt="percent" className={s.percentImg} />
          </div> */}
        </div>
      </section>
      <div className={s.textblock}>
        <p className={s.whiteText}>
          Checking the similarity by{" "}
          <span className={s.yellowText}>123 points</span> of facial geometry
          with AI
        </p>
      </div>
      <section className={cn("container", s.secondSection)}>
        <div className={s.secondSection__contentContainer}>
          <div className={s.secondSection__titleContainer}>
            <h2
              className={cn(s.secondSection__title, s.h2, s.secondInfo__mobile)}
            >
              When looking for love, start by looking in the mirror
            </h2>
            <div className={s.center}>
              <p className={s.secondInfo}>
                Why Do So Many Couples Look Alike? <br /> Here’s the Psychology
                Behind the Weird Phenomenon
              </p>
            </div>
          </div>
          <div className={s.secondSection__imageWrapper}>
            <div className={s.secondImage}>
              <img
                src={size.width < 500 ? PhotoMob : Photo}
                alt="second-image"
                className={s.secondImg}
              />
            </div>
            <div
              className={cn(s.longText, {
                [s.regularText]: size.width > 768,
                ["container"]: size.width < 768,
              })}
            >
              <span>
                Married couples often do not notice that they resemble each
                other. They are told of this fact by their acquaintances. <br />
                <br /> Lookalike couples have captured public fascination for
                years. Back in 1987, scientists from the University of Michigan
                set out to study the phenomenon of married couples who grow to
                look more alike over time.
                <br />
                <br /> Their theory, which scientists still cite today, was that
                decades of shared emotions result in a closer resemblance due to
                similar wrinkles and expressions.
              </span>
            </div>
          </div>
        </div>

        <div className={s.phraseBackground}>
          <div className={s.phraseContainer}>
            “You’re familiar with your own appearance, so seeing other people
            who share those similar sorts of traits might lead to more liking
            for that reason,” they says.
          </div>
        </div>
      </section>
      <section className={s.thirdSection}>
        <div className={cn("container", s.thirdSection__contentContainer)}>
          <div className={s.thirdSection__wrapper}>
            <div className={s.thirdSection__titleContainer}>
              <h2 className={cn(s.h2, s.likeness)}>
                How is your likeness determined
              </h2>
            </div>
            <div className={s.relativeImage}>
              <div className={s.absolut}>
                <img src={Circle} alt="status" />
              </div>
            </div>
            <div
              className={cn(s.longText2, {
                [s.regularText]: size.width > 768,
                // ["container"]: size.width < 768,
              })}
            >
              <span>
                Our algorithm analyzes your faces according to a variety of
                parameters and creates a special mask to compare facial
                geometry.{" "}
                {size.width < 768 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
                And today we get the result with an accuracy of about 87%.
                That's practically the right result.
                <br />
                <br /> What do you do with this result? Our test lets you know
                that you're on the right track to choose your soul mate!
              </span>
            </div>
            <Button
              className={s.checkSimilarity}
              onClick={() => navigate('/upload')}
            >
              Check similarity
            </Button>
          </div>
          <div className={s.bigRevativeImage}>
            <img src={ThirdImage} alt="image" className={s.image3} />
            <div className={s.bigAbsolut}>
              <img src={CircleWeb} alt="status" />
            </div>
          </div>
        </div>

        {/* <div className="container"></div> */}
      </section>
      <section
        className={cn(s.fourthSection, {
          ["container"]: size.width > 768,
        })}
      >
        <div
          className={cn(s.fourthSection__titleContainer, {
            ["container"]: size.width < 768,
          })}
        >
          <h2 className={cn(s.h2, s.check)}>
            Check how similar your parents are
          </h2>
          <p className={s.mainInfo}>
            The major aspect to consider when examining parental similarities is
            physical appearance.{" "}
            {size.width < 768 && (
              <>
                <br />
                <br />
              </>
            )}{" "}
            It is not uncommon for children to notice resemblances between their
            parents, whether it be physical features like eye color, hair
            texture, or even their smiles. <br />
            <br /> These similarities can create a sense of connection and
            belonging within the family unit, as children often find comfort in
            seeing themselves reflected in their parents.
          </p>
          {size.width > 768 && (
            <Button
              className={cn(s.checkSimilarity, s.bottomBtn)}
              onClick={() => navigate('/upload')}
            >
              Check similarity
            </Button>
          )}
        </div>

        <div className={s.bottomImage}>
          <img src={Parents} alt="parents" className={s.bottomImg} />
        </div>
        {size.width <= 768 && (
          <Button
            className={cn(s.checkSimilarity, s.bottomBtn)}
            onClick={() => navigate('/upload')}
          >
            Check similarity
          </Button>
        )}
      </section>
      <Popup active={isPopupOPen} onClose={() => setIsPopupOpen(false)}>
        <div className={s.popup}>
          <h1 className={s.popup__title}>ULLME</h1>
          <h4 className={s.popup__subtitle}>AI service knows the answer!</h4>
          <div className={s.popup__list}>
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S109051382300051X?via%3Dihub"
              target="_blank"
              className={s.link}
            >
              Objectively measured facial traits predict in-person evaluations
              of facial attractiveness and prosociality in speed-dating partners
            </a>

            <a
              href="https://socialscience.msu.edu/news-events/news/archives/2021/2021-08-03.html"
              target="_blank"
              className={s.link}
            >
              More than just a "type" - new research shows people tend to choose
              partners similar to their exes or parents
            </a>

            <a
              href="https://www.psychologytoday.com/intl/blog/close-encounters/201812/why-do-we-people-who-are-similar-us"
              target="_blank"
              className={s.link}
            >
              Why Do We Like People Who Are Similar to Us?
            </a>
          </div>
        </div>
      </Popup>
    </main>
  );
};

export default Home;
