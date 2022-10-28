import Image from "next/image";
import styles from "../styles/PictureGame.module.css";
import { useState } from "react";
import CustomButton from "./components/button";
import Swal from "sweetalert2";
import Link from "next/link";

export default function PictureGame() {
  const data = [
    {
      name: "Mostefa Benboulaid",
      info: `Mostefa Ben Boulaid (The lion of Aures). He was a founding member of the
      Revolutionary Committee of Unity and Action (CRUA). He became a member of
      the &quot;Committee of the Six&quot; (the insurgent leaders). During the Algerian war, Ben-
      Boulaid was responsible for Area I (Aurès).`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mustapha_Ben_boulaid.jpg/1280px-Mustapha_Ben_boulaid.jpg",
    },
    {
      name: "Med Larbi Ben mhidi",
      info: `Commonly known as Si Larbi was a prominent revolutionary leader during the
      Algerian war of independence. He is one of the six founding members of the Front
      de Libération Nationale (FLN) that launched an armed revolt throughout Algeria.
      He commanded Wilaya V (the military district in the Oran region).`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Ben_mhidi.jpg",
    },
    {
      name: "Didouche Mourad",
      info: `Mourad Didouche, nicknamed si Abdelkader, he was appointed head of the
      neighborhoods of El Mouradia, El Madania and Bir Mourad Rais. He was one of
      the most prominent writers of the Declaration of 1 November 1954 and managed.`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Didouche_mourad.jpg",
    },
    {
      name: "Zighoud Youcef",
      info: `Zighoud Youssef is a leader of the FLN fighter during the war of Algeria in the
      north of Constantine. representative of the Movement for the Victory of
      Democratic Freedoms, he joined the special organization entrusted with providing
      the necessary conditions for the outbreak of the armed struggle.`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/7/71/Zighout_Youcef.jpg",
    },
    {
      name: "Rabah Bitat",
      info: `Rabah Bitat is a nationalist militant and Algerian statesman, one of the six
      founders of the National Liberation Front in 1954, and, after independence, several
      times minister. He was also acting head of state, following the death of
      Houari Boumediene.`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Rabah_Bitat.jpg",
    },
    {
      name: "Mohamed Boudiaf",
      info: `Mohamed Boudiaf, Algerian political leader who was a founder of the
      revolutionary National Liberation Front (FLN) that led the Algerian war of
      independence (1954–62), and after a 27-year exile, the president of Algeria (1992).`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/7/71/Le_jeun_Mohamed_Boudiaf.jpg",
    },
    {
      name: "Hassiba Benbouali",
      info: `Hassiba Ben Bouali is an Algerian activist and resistance fighter during the
      Algerian War, notably participating in the Battle of Algiers alongside Ali la Pointe,
      Zohra Drif and Yacef Saâdi, head of the Autonomous Zone of Alger.`,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Hassiba_Ben_Bouali.jpg/400px-Hassiba_Ben_Bouali.jpg",
    },
  ];
  const [current, setCurrent] = useState(data[0]);
  const [text, setText] = useState("");
  var stringSimilarity = require("string-similarity");
  const [index, setIndex] = useState(0);

  function handleValidate() {
    if (text === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a name",
      });
    } else if (stringSimilarity.compareTwoStrings(text, current.name) > 0.6) {
      Swal.fire({
        title: "Correct answer!",
        text: current.info,
        icon: "success",
        confirmButtonColor: "#ACDDFB",
      }).then(() => {
        if (index + 1 >= data.length) {
          setIndex(0);
          setCurrent(data[0]);
        } else {
          setCurrent(data[index + 1]);
          setIndex(index + 1);
        }

        setText("");
      });
    } else {
      Swal.fire({
        title: "Wrong answer!",
        text: current.info,
        icon: "error",
        confirmButtonText: "Next",
        confirmButtonColor: "#ACDDFB",
        color: "black",
      }).then(() => {
        if (index + 1 >= data.length) {
          setIndex(0);
          setCurrent(data[0]);
        } else {
          setCurrent(data[index + 1]);
          setIndex(index + 1);
        }
        setText("");
      });
    }
  }
  return (
    <div className={styles.pictureGame}>
      <Image
        className="cse-logo"
        width={150}
        height={150}
        src="/cse-logo.png"
        alt="CSE LOGO"
      ></Image>

      <div className={styles.imageContainer}></div>

      <Image
        className={styles.picture}
        src={current.picture}
        alt={current.name}
        height={400}
        width={400}
      ></Image>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your answer..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <CustomButton onClick={handleValidate} text="Validate" />
      <Link href="/game-choice">
        <Image
          className={styles.backButton}
          width={100}
          height={100}
          src="/icons/arrow.svg"
          alt="Icon arrow"
        ></Image>
      </Link>
    </div>
  );
}
