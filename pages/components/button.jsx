import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function CustomButton({ text, children, onClick }) {
  return (
    <div onClick={onClick} className={styles.button}>
      <p>{text}</p>
      {children}
    </div>
  );
}
