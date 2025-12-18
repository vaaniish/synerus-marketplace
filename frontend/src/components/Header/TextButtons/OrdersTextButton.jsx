// src/components/Header/OrdersTextButton.jsx
import { OrdersIcon } from "./Icons";
import styles from "../Header.module.css";

export const OrdersTextButton = ({ onClick }) => (
  <button className={styles.textIconButton} onClick={onClick}>
    <div className={styles.iconWrapper}>
      <OrdersIcon />
    </div>
    <span className={styles.iconText}>Заказы</span>
  </button>
);