// src/components/Header/TextIconButtons.jsx
import { AccountIcon, CartIcon, FavoriteIcon, OrdersIcon } from "./Icons";
import styles from "./Header.module.css";

export const AccountTextButton = ({ onClick }) => (
  <button className={styles.textIconButton} onClick={onClick}>
    <div className={styles.iconWrapper}>
      <AccountIcon />
    </div>
    <span className={styles.iconText}>Аккаунт</span>
 </button>
);

export const OrdersTextButton = ({ onClick }) => (
  <button className={styles.textIconButton} onClick={onClick}>
    <div className={styles.iconWrapper}>
      <OrdersIcon />
    </div>
    <span className={styles.iconText}>Заказы</span>
  </button>
);

export const FavoriteTextButton = ({ onClick }) => (
  <button className={styles.textIconButton} onClick={onClick}>
    <div className={styles.iconWrapper}>
      <FavoriteIcon />
    </div>
    <span className={styles.iconText}>Избранное</span>
  </button>
);

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