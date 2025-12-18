// src/components/Header/TextButtons/CartTextButton.jsx
import { CartIcon } from "./Icons";
import styles from "../Header.module.css";

export const CartTextButton = ({ onClick, cartCount }) => (
  <button className={styles.textIconButton} onClick={onClick}>
    <div className={styles.iconWrapper}>
      <CartIcon />
      {cartCount > 0 && (
        <span className={styles.cartBadge}>{cartCount}</span>
      )}
    </div>
    <span className={styles.iconText}>Корзина</span>
  </button>
);