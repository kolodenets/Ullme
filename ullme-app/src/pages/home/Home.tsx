import { useState } from "react";
import cn from "classnames";
import Button from "../../components/Button/Button";
import Logo from "/assets/images/Logo.png";
import Circle from "/assets/icons/Status-Normal.svg";
import CircleWeb from "/assets/icons/Status-Normal-web.svg";
import Percent from "/assets/icons/percent.svg";
import MainImage from "/assets/images/image1-web.png";
import Parents from "/assets/images/parents.png";
import ParentsMob from "/assets/images/parents-mob.png";
import SecondImage from "../../../public/assets/images/image2-web.png";
import SecondImageMobile from "../../../public/assets/images/image2.png";
import ThirdImage from "../../../public/assets/images/image3-web.png";
import s from "./Home.module.scss";
import UISwiper from "../../components/Swiper/UISwiper";

const Home = () => {
  const [activeLongText, setActiveLongText] = useState(false);
  const [activeLongText2, setActiveLongText2] = useState(false);
  return (
    <main className={s.homePageWrapper}>
      <section className={s.heroSection}>
        <div className={s.heroContent}>
          <div className={s.heroContainer}>
            <div className={s.heroBody}>
              <h1 className={s.mainTitle}>Do you look alike?</h1>
              <h4 className={s.mainSubtitle}>
                Ullme AI service knows the answer!
              </h4>
              <p className={s.mainInfo}>
                Scientists have proven that people who look like{" "}
                {window.innerWidth > 768 && <br />} each other are attracted to
                each other. It is laid down by nature. <br />
                <br /> It's time to test this statement for yourself!{" "}
                {window.innerWidth > 768 && <br />}
                Upload photos of your couple and find out how much you look
                like.
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
          <img src={MainImage} alt="mainImage" className={s.mainImage} />
          <div className={s.percentage}>
            <img src={Percent} alt="percent" className={s.percentImg} />
          </div>
        </div>
      </section>
      <UISwiper />
      <section className={cn("container", s.secondSection)}>
        <div className={s.secondSection__contentContainer}>
          <div className={s.secondSection__imageWrapper}>
            <div className={s.secondSection__titleContainer}>
              <h2 className={cn(s.h2, s.secondInfo__mobile)}>
                When looking for love, start by looking in the mirror
              </h2>
              <div className={s.center}>
                <p className={s.secondInfo}>
                  Why Do So Many Couples Look Alike? Here’s the Psychology
                  Behind the Weird Phenomenon
                </p>
              </div>
            </div>
            <div className={s.secondImage}>
              <img
                src={window.innerWidth < 768 ? SecondImageMobile : SecondImage}
                alt="second-image"
              />
            </div>
          </div>

          <div
            className={cn(
              s.shortText,
              { [s.longText]: window.innerWidth < 768 && activeLongText },
              {
                [s.regularText]: window.innerWidth > 768,
                ["container"]: window.innerWidth < 768,
              }
            )}
            onClick={() => setActiveLongText(!activeLongText)}
          >
            <span>
              Married couples often do not notice that they resemble each other.
              They are told of this fact by their acquaintances. <br />
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
              <div className={s.logoImg}>
                <img src={Logo} alt="logo" />
              </div>
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
              className={cn(s.shortText2, {
                [s.longText2]: activeLongText2,
                [s.regularText]: window.innerWidth > 768,
                // ["container"]: window.innerWidth < 768,
              })}
              onClick={() => setActiveLongText2(!activeLongText2)}
            >
              <span>
                Our algorithm analyzes your faces according to a variety of
                parameters and creates a special mask to compare facial
                geometry.{" "}
                {window.innerWidth < 768 && (
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
      <section className={cn(s.fourthSection, {
            ["container"]: window.innerWidth > 768,
          })}>
        <div
          className={cn(s.fourthSection__titleContainer, {
            ["container"]: window.innerWidth < 768,
          })}
        >
          <h2 className={cn(s.h2, s.check)}>
            Check how similar your parents are
          </h2>
          <p className={s.mainInfo}>
            The major aspect to consider when examining parental similarities is
            physical appearance.{" "}
            {window.innerWidth < 768 && (
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
            <img
              src={window.innerWidth < 768 ? ParentsMob : Parents}
              alt="parents"
            />
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
