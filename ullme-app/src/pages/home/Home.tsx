import cn from "classnames";
import Button from "../../components/Button/Button";

import Circle from "/assets/icons/Status-Normal.svg";
import CircleWeb from "/assets/icons/Status-Normal-web.svg";

import MainImage from "/assets/images/mainImageWeb.png";
import MainImageMob from "/assets/images/mainImageMob.png";
import Parents from "/assets/images/parents.png";
import ParentsMob from "/assets/images/parents-mob.png";
import SecondImage from "../../../public/assets/images/secondImageWeb.png";
import SecondImageMobile from "../../../public/assets/images/secondImageMob.png";
import ThirdImage from "../../../public/assets/images/image3-web.png";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import s from "./Home.module.scss";

const Home = () => {
  const size = useWindowDimensions();

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
                You can read more here{" "}
                <span className={s.svg}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.8125 20.25C20.8125 20.3992 20.7532 20.5423 20.6477 20.6477C20.5423 20.7532 20.3992 20.8125 20.25 20.8125H3.75C3.60082 20.8125 3.45774 20.7532 3.35225 20.6477C3.24676 20.5423 3.1875 20.3992 3.1875 20.25C3.1875 20.1008 3.24676 19.9577 3.35225 19.8523C3.45774 19.7468 3.60082 19.6875 3.75 19.6875H20.25C20.3992 19.6875 20.5423 19.7468 20.6477 19.8523C20.7532 19.9577 20.8125 20.1008 20.8125 20.25ZM7.5 16.3125C7.64913 16.3124 7.79211 16.253 7.8975 16.1475L17.4375 6.60844V14.25C17.4375 14.3992 17.4968 14.5423 17.6023 14.6477C17.7077 14.7532 17.8508 14.8125 18 14.8125C18.1492 14.8125 18.2923 14.7532 18.3977 14.6477C18.5032 14.5423 18.5625 14.3992 18.5625 14.25V5.25C18.5625 5.10082 18.5032 4.95774 18.3977 4.85225C18.2923 4.74676 18.1492 4.6875 18 4.6875H9C8.85082 4.6875 8.70774 4.74676 8.60225 4.85225C8.49676 4.95774 8.4375 5.10082 8.4375 5.25C8.4375 5.39918 8.49676 5.54226 8.60225 5.64775C8.70774 5.75324 8.85082 5.8125 9 5.8125H16.6416L7.1025 15.3525C7.02393 15.4312 6.97044 15.5313 6.94878 15.6404C6.92711 15.7494 6.93825 15.8625 6.98078 15.9652C7.02332 16.0679 7.09534 16.1557 7.18775 16.2175C7.28016 16.2794 7.38882 16.3124 7.5 16.3125Z"
                      fill="#1890FF"
                    />
                  </svg>
                </span>
              </p>
              <Button
                className={s.checkSimilarity}
                onClick={() => console.log("click")}
              >
                Check similarity
              </Button>
            </div>
          </div>
        </div>
        <div className={s.mainImageContainer}>
          <img
            src={size.width > 375 ? MainImage : MainImageMob}
            alt="mainImage"
            className={s.mainImage}
          />
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
                Why Do So Many Couples Look Alike? Here’s the Psychology Behind
                the Weird Phenomenon
              </p>
            </div>
          </div>
          <div className={s.secondSection__imageWrapper}>
            <div className={s.secondImage}>
              <img
                src={size.width < 768 ? SecondImageMobile : SecondImage}
                alt="second-image"
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
              onClick={() => console.log("click")}
            >
              Check similarity
            </Button>
          </div>
          <div className={s.bigRevativeImage}>
            <img src={ThirdImage} alt="image" />
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
        </div>

        <div className={s.fourthSection__imageContainer}>
          <div className={s.bottomImage}>
            <img src={size.width < 768 ? ParentsMob : Parents} alt="parents" />
          </div>
          <Button
            className={cn(s.checkSimilarity, s.bottomBtn)}
            onClick={() => console.log("click")}
          >
            Check similarity
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
