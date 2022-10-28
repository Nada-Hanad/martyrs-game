import { useEffect, useState } from "react";
import Question from "./components/question";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/Q&A.module.css";
import Image from "next/image";
import Swal from "sweetalert2";
import Router from "next/router";
import Link from "next/link";
export default function QandA() {
  const [swiper, setSwiper] = useState(null);
  const [toDisplay, setToDisplay] = useState({
    name: "",
    info: "",
    picture: "",
  });
  var _ = require("lodash");
  const questions = [
    { question: "Are you?", options: ["Male", "Female"], id: "gender" },
    {
      question: "Do you find the energy to help people out?",
      options: ["Yes", "No"],
      id: "help",
    },
    {
      question:
        "On a scale of 1 to 4, 4 being the most generous, how generous are you?",
      options: ["1", "2", "3", "4"],
      id: "generousity",
    },
    {
      question: "Do you set up long term goals?",
      options: ["Yes", "No"],
      id: "goals",
    },
    {
      question: "re you considerate of other people’s feelings?",
      options: ["Yes", "No"],
      id: "considerate",
    },
    {
      question: "Are you always busy?",
      options: ["Yes", "No"],
      id: "busy",
    },
    {
      question: "Do you like solving complex problems?",
      options: ["Yes", "No"],
      id: "solving",
    },
    {
      question: "Do you prefer familiarity over unfamiliarity?",
      options: ["Yes", "No"],
      id: "familiarity",
    },
    {
      question: "Are you generally passionate about social causes?",
      options: ["Yes", "No"],
      id: "socialCauses",
    },
    {
      question: "Would you take initiative to create something new?",
      options: ["Yes", "No"],
      id: "initiative",
    },
    {
      question: "Are you interested in music and arts?",
      options: ["Yes", "No"],
      id: "musicAndArts",
    },
  ];
  const answers = [
    {
      name: "Mostefa Benboulaid",
      info: `Mostefa Ben Boulaid (The lion of Aures). He was a founding member of the
      Revolutionary Committee of Unity and Action (CRUA). He became a member of
      the &quot;Committee of the Six&quot; (the insurgent leaders). During the Algerian war, Ben-
      Boulaid was responsible for Area I (Aurès).`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mustapha_Ben_boulaid.jpg/1280px-Mustapha_Ben_boulaid.jpg",
      answer: {
        gender: "Male",
        help: "Yes",
        generousity: "4",
        goals: "No",
        considerate: "Yes",
        busy: "No",
        solving: "Yes",
        familiarity: "No",
        socialCauses: "Yes",
        initiative: "Yes",
        musicAndArts: "No",
      },
    },
    {
      name: "Med Larbi Ben mhidi",
      info: `Commonly known as Si Larbi was a prominent revolutionary leader during the
      Algerian war of independence. He is one of the six founding members of the Front
      de Libération Nationale (FLN) that launched an armed revolt throughout Algeria.
      He commanded Wilaya V (the military district in the Oran region).`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Ben_mhidi.jpg",
      answer: {
        gender: "Male",
        help: "Yes",
        generousity: "4",
        goals: "Yes",
        considerate: "Yes",
        busy: "No",
        solving: "No",
        familiarity: "No",
        socialCauses: "Yes",
        initiative: "Yes",
        musicAndArts: "Yes",
      },
    },
    {
      name: "Didouche Mourad",
      info: `Mourad Didouche, nicknamed si Abdelkader, he was appointed head of the
      neighborhoods of El Mouradia, El Madania and Bir Mourad Rais. He was one of
      the most prominent writers of the Declaration of 1 November 1954 and managed.`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Didouche_mourad.jpg",
      answer: {
        gender: "Male",
        help: "Yes",
        generousity: "3",
        goals: "Yes",
        considerate: "Yes",
        busy: "Yes",
        solving: "Yes",
        familiarity: "No",
        socialCauses: "Yes",
        initiative: "Yes",
        musicAndArts: "Yes",
      },
    },
    {
      name: "Zighoud Youcef",
      info: `Zighoud Youssef is a leader of the FLN fighter during the war of Algeria in the
      north of Constantine. representative of the Movement for the Victory of
      Democratic Freedoms, he joined the special organization entrusted with providing
      the necessary conditions for the outbreak of the armed struggle.`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/7/71/Zighout_Youcef.jpg",
      answer: {
        gender: "Male",
        help: "Yes",
        generousity: "3",
        goals: "No",
        considerate: "Yes",
        busy: "No",
        solving: "Yes",
        familiarity: "No",
        socialCauses: "No",
        initiative: "Yes",
        musicAndArts: "No",
      },
    },
    {
      name: "Rabah Bitat",
      info: `Rabah Bitat is a nationalist militant and Algerian statesman, one of the six
      founders of the National Liberation Front in 1954, and, after independence, several
      times minister. He was also acting head of state, following the death of
      Houari Boumediene.`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Rabah_Bitat.jpg",
      answer: {
        gender: "Male",
        help: "Yes",
        generousity: "2",
        goals: "Yes",
        considerate: "Yes",
        busy: "Yes",
        solving: "No",
        familiarity: "Yes",
        socialCauses: "No",
        initiative: "No",
        musicAndArts: "No",
      },
    },
    {
      name: "Mohamed Boudiaf",
      info: `Mohamed Boudiaf, Algerian political leader who was a founder of the
      revolutionary National Liberation Front (FLN) that led the Algerian war of
      independence (1954–62), and after a 27-year exile, the president of Algeria (1992).`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/7/71/Le_jeun_Mohamed_Boudiaf.jpg",
      answer: {
        gender: "Male",
        help: "Yes",
        generousity: "4",
        goals: "Yes",
        considerate: "Yes",
        busy: "Yes",
        solving: "Yes",
        familiarity: "Yes",
        socialCauses: "No",
        initiative: "Yes",
        musicAndArts: "Yes",
      },
    },
    {
      name: "Hassiba Benbouaali",
      info: `Hassiba Ben Bouali is an Algerian activist and resistance fighter during the
      Algerian War, notably participating in the Battle of Algiers alongside Ali la Pointe,
      Zohra Drif and Yacef Saâdi, head of the Autonomous Zone of Alger.`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Hassiba_Ben_Bouali.jpg/400px-Hassiba_Ben_Bouali.jpg",
      answer: {
        gender: "Female",
        help: "Yes",
        generousity: "4",
        goals: "No",
        considerate: "Yes",
        busy: "Yes",
        solving: "No",
        familiarity: "No",
        socialCauses: "Yes",
        initiative: "No",
        musicAndArts: "Yes",
      },
    },
  ];
  const [answer, setAnswer] = useState({
    gender: "",
    help: "",
    generousity: "",
    goals: "",
    considerate: "",
    busy: "",
    solving: "",
    familiarity: "",
    socialCauses: "",
    initiative: "",
    musicAndArts: "",
  });

  const next = () => {
    swiper.slideNext();
  };
  const prev = () => {
    swiper.slidePrev();
  };

  return (
    <div>
      <Link href="/game-choice">
        <Image
          className={styles.backButton}
          width={100}
          height={100}
          src="/icons/arrow.svg"
          alt="Icon arrow"
        ></Image>
      </Link>
      <Image
        className="cse-logo"
        width={150}
        height={150}
        src="/cse-logo.png"
        alt="CSE LOGO"
      ></Image>
      <Swiper
        onSwiper={(s) => {
          setSwiper(s);
        }}
        className={styles.swiper}
        allowTouchMove={false}
      >
        {questions.map((question, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Question
              question={question.question}
              options={question.options}
              setAnswer={setAnswer}
              answer={answer}
              id={question.id}
            />
            <div className={styles.actions}>
              <button
                style={{
                  visibility: index === 0 ? "hidden" : "visible",
                }}
                className={styles.button}
                onClick={prev}
              >
                <Image
                  className={styles.flip}
                  width={50}
                  height={50}
                  src="/icons/arrow.svg"
                  alt="Icon arrow"
                ></Image>
                <p>Previous</p>
              </button>
              <button
                className={styles.button}
                onClick={() => {
                  if (answer[question.id] === "") {
                    Swal.fire({
                      title: "You have to give an answer to proceed",
                      icon: "warning",
                      confirmButtonText: "Okay",
                      confirmButtonColor: "#ACDDFB",
                    });
                  } else {
                    if (index === 10) {
                      console.log(
                        answers.find((e) => _.isEqual(e.answer, answer))
                      );
                      setToDisplay(
                        answers.find((e) => _.isEqual(e.answer, answer))
                      );
                    }
                    next();
                  }
                }}
              >
                <p>Next</p>
                <Image
                  width={50}
                  height={50}
                  src="/icons/arrow.svg"
                  alt="Icon arrow"
                ></Image>
              </button>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className={styles.swiperSlide}>
          {toDisplay === undefined ? (
            <h3 className={styles.notFound}>
              Oops... no available martyr data matches your enteries!
            </h3>
          ) : (
            <div className={styles.result}>
              <div className={styles.info}>
                <h3>{toDisplay.name} </h3>
                <p>{toDisplay.info}</p>
                <Image
                  width={240}
                  height={240}
                  className={styles.pictureMar}
                  src={toDisplay.picture}
                  alt="Martyr's picture"
                ></Image>
              </div>
            </div>
          )}

          <button
            className={styles.retryButton}
            onClick={() => {
              setAnswer({
                gender: "",
                help: "",
                generousity: "",
                goals: "",
                considerate: "",
                busy: "",
                solving: "",
                familiarity: "",
                socialCauses: "",
                initiative: "",
                musicAndArts: "",
              });
              Router.reload();
            }}
          >
            <p>Retry</p>
            <Image
              width={50}
              height={50}
              src="/icons/retry.svg"
              alt="Icon arrow"
            ></Image>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
