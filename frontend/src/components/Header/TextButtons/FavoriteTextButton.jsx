// src/components/Header/FavoriteTextButton.jsx
import { FavoriteIcon } from "./Icons";
import styles from "../Header.module.css";

export const FavoriteTextButton = ({ onClick }) => (
  <button className={styles.textIconButton} onClick={onClick}>
    <div className={styles.iconWrapper}>
      <FavoriteIcon />
    </div>
    <span className={styles.iconText}>Избранное</span>
  </button>
);