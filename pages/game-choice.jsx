import Image from "next/image";
import Link from "next/link";
import styles from "../styles/GameChoice.module.css";
export default function GameChoice() {
  return (
    <div className={styles.gameChoice}>
      <Image
        className="cse-logo"
        width={150}
        height={150}
        src="/cse-logo.png"
        alt="CSE LOGO"
      ></Image>
      <h2>Choose your game</h2>
      <div className={styles.choices}>
        <Link href="/picture-game">
          <div className={styles.choice}>
            <p>Guess the martyr</p>

            <Image
              width={370}
              height={370}
              className={styles.image}
              src="/images/guess.svg"
              alt="Martyrs images"
            ></Image>
          </div>
        </Link>
        <Link href="/q&a-game">
          <div className={styles.choice}>
            <p>Q&A</p>
            <div className={styles.qContainer}>?</div>
            <div className={styles.options}>
              <div className={styles.option}></div>
              <div className={styles.option}></div>
            </div>
            <Image
              width={190}
              height={190}
              className={styles.image}
              src="/images/q&a.svg"
              alt="Q&A image"
            ></Image>
          </div>
        </Link>
      </div>
    </div>
  );
}
