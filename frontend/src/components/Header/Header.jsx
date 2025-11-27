// src/components/Header/Header.jsx
import { useState } from "react";
import { SearchIcon } from "./Icons";
import { AccountTextButton, OrdersTextButton, FavoriteTextButton, CartTextButton } from "./TextIconButtons";
import styles from "./Header.module.css";

export const Header = () => {
  const [cartCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Here you would typically handle the search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLayout}>
          {/* Left side - Logo and Catalog Button */}
          <div className={styles.leftSide}>
            <div className={styles.logo} onClick={() => window.location.href = '/'}>
              <img src="/src/assets/logo.png" alt="Logo" className={styles.newLogo} />
            </div>
            <button
              type="button"
              className={styles.catalogButton}
              onClick={() => window.location.href = '/catalog'}
            >
              Каталог
            </button>
          </div>

          {/* Center - Search Bar */}
          <div className={styles.center}>
            <div className={styles.searchBarContainer}>
              <form className={styles.searchForm} onSubmit={handleSearch}>
                <div className={styles.searchInputContainer}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Искать на CHROMAKOPIA"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button type="submit" className={styles.searchButton}>
                  <SearchIcon />
                </button>
              </form>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className={styles.rightSide}>
            <div className={styles.actions}>
              <AccountTextButton onClick={() => window.location.href = '/account'} />
              <OrdersTextButton onClick={() => window.location.href = '/orders'} />
              <FavoriteTextButton onClick={() => window.location.href = '/favorites'} />
              <CartTextButton onClick={() => window.location.href = '/cart'} cartCount={cartCount} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
