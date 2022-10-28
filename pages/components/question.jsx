import { useEffect, useState } from "react";
import styles from "../../styles/Q&A.module.css";

export default function Question({ options, question, setAnswer, id, answer }) {
  const [current, setCurrent] = useState("");
  function handleClick(event) {
    var temp = answer;
    setCurrent(event.target.getAttribute("data-value"));
    temp[id] = event.target.getAttribute("data-value");
    setAnswer(temp);
  }

  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      <div className={styles.answers}>
        {options?.map((option, index) => (
          <div
            key={index}
            className={styles.answer}
            data-value={option}
            onClick={handleClick}
            style={{
              backgroundColor: current === option ? "#08a6ff" : "white",
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
