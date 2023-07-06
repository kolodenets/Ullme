import { useState } from "react";
import cn from "classnames";
import Button from "../../components/Button/Button";
import Logo from "/assets/images/Logo.png";
import Circle from "/assets/icons/Status-Normal.svg";
import s from "./Home.module.scss";
import UISwiper from "../../components/Swiper/UISwiper";

const Home = () => {
  const [activeLongText, setActiveLongText] = useState(false);
  const [activeLongText2, setActiveLongText2] = useState(false);
  return (
    <main className={s.homePageWrapper}>
      <section className={cn("container", s.heroSection)}>
        <div className={s.image}></div>
        <h1 className={s.mainTitle}>Do you look alike?</h1>
        <p className={s.mainInfo}>
          Scientists have proven that people who look like each other are
          attracted to each other.
          <br /> It is laid down by nature. <br />
          <br /> It's time to test this statement for yourself! Upload photos of
          your couple and find out how much you look like.
        </p>
        <Button
          className={s.checkSimilarity}
          onClick={() => console.log("click")}
        >
          Check similarity
        </Button>
      </section>
      <UISwiper/>
      <section className={cn("container", s.secondSection)}>
        <div className={s.center}>
          <p className={s.secondInfo}>
            Why Do So Many Couples Look Alike? Here’s the Psychology Behind the
            Weird Phenomenon
          </p>
        </div>
        <h2 className={s.h2}>
          When looking for love, start by looking in the mirror
        </h2>
        <div className={s.secondImage}></div>
        <div
          className={cn(s.shortText, { [s.longText]: activeLongText })}
          onClick={() => setActiveLongText(!activeLongText)}
        >
          <span>
            Married couples often do not notice that they resemble each other.
            They are told of this fact by their acquaintances. <br />
            <br /> Lookalike couples have captured public fascination for years.
            Back in 1987, scientists from the University of Michigan set out to
            study the phenomenon of married couples who grow to look more alike
            over time.
            <br />
            <br /> Their theory, which scientists still cite today, was that
            decades of shared emotions result in a closer resemblance due to
            similar wrinkles and expressions.
          </span>
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
        <div className="container">
          <h2 className={cn(s.h2, s.likeness)}>
            How is your likeness determined
          </h2>
        </div>
        <div className={s.logoImg}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={s.relativeImage}>
          <div className={s.absolut}>
            <img src={Circle} alt="status" />
          </div>
        </div>
        <div
          className={cn("container", s.shortText2, {
            [s.longText2]: activeLongText2,
          })}
          onClick={() => setActiveLongText2(!activeLongText2)}
        >
          <span>
            Our algorithm analyzes your faces according to a variety of
            parameters and creates a special mask to compare facial geometry.{" "}
            <br />
            <br />
            And today we get the result with an accuracy of about 87%. That's
            practically the right result.
            <br />
            <br /> What do you do with this result? <br /> Our test lets you
            know that you're on the right track to choose your soul mate!
          </span>
        </div>
        <Button
          className={s.checkSimilarity}
          onClick={() => console.log("click")}
        >
          Check similarity
        </Button>
      </section>
      <section className={cn("container", s.fourthSection)}>
        <h2 className={cn(s.h2, s.check)}>
          Check how similar your parents are
        </h2>
        <p className={s.mainInfo}>
          The major aspect to consider when examining parental similarities is
          physical appearance. <br />
          <br /> It is not uncommon for children to notice resemblances between
          their parents, whether it be physical features like eye color, hair
          texture, or even their smiles. <br />
          <br /> These similarities can create a sense of connection and
          belonging within the family unit, as children often find comfort in
          seeing themselves reflected in their parents.
        </p>
        <div className={s.bottomImage}></div>
        <Button
          className={s.checkSimilarity}
          onClick={() => console.log("click")}
        >
          Check similarity
        </Button>
      </section>
    </main>
  );
};

export default Home;
