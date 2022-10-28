import Image from "next/image";
import styles from "../styles/Home.module.css";
import CustomButton from "./components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <Image
        src="/cse-logo.png"
        alt="cse logo"
        width={320}
        height={320}
        draggable={false}
      ></Image>
      <h2>CSE presents</h2>
      <p>
        On the occasion of the 68th anniversary of the Algerian 🇩🇿 Revolution,
        CSE presents these 2 games to commemorate our dear martyrs.
      </p>
      <Link href="/game-choice">
        <CustomButton text="START">
          <Image
            src="/icons/arrow.svg"
            alt="arrow icon"
            width={40}
            height={40}
            draggable={false}
          ></Image>
        </CustomButton>
      </Link>
    </div>
  );
}
