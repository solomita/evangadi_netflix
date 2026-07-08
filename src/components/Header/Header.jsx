import { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import styles from "./Header.module.css";

const NAV_LINKS = [
  "Home",
  "TV Shows",
  "Movies",
  "New & Popular",
  "My List",
  "Browse by Language",
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Netflix darkens the header once the user scrolls past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.solid : ""}`}>
      <div className={styles.left}>
        <img className={styles.logo} src={logo} alt="Netflix" />
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className={styles.navLink}>
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.right}>
        <div className={`${styles.search} ${searchOpen ? styles.searchOpen : ""}`}>
          <button
            className={styles.iconBtn}
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
            </svg>
          </button>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search"
          />
        </div>

        <button className={styles.iconBtn} aria-label="Notifications">
          <span className={styles.bellDot} />
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 22a2.5 2.5 0 002.45-2h-4.9A2.5 2.5 0 0012 22zm7-6v-5a7 7 0 00-5-6.71V4a2 2 0 10-4 0v.29A7 7 0 005 11v5l-2 2v1h18v-1l-2-2z" />
          </svg>
        </button>

        <div
          className={styles.profile}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <div className={styles.avatar}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
            </svg>
          </div>
          <svg
            className={`${styles.caret} ${menuOpen ? styles.caretUp : ""}`}
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>

          {menuOpen && (
            <div className={styles.dropdown}>
              <a href="#">Account</a>
              <a href="#">Help Center</a>
              <div className={styles.divider} />
              <a href="#">Sign out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
