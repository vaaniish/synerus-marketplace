// src/components/Header/AccountTextButton.jsx
import { AccountIcon } from "./Icons";
import styles from "../Header.module.css";

export const AccountTextButton = ({ onClick }) => (
  <button className={styles.textIconButton} onClick={onClick}>
    <div className={styles.iconWrapper}>
      <AccountIcon />
    </div>
    <span className={styles.iconText}>Аккаунт</span>
  </button>
);