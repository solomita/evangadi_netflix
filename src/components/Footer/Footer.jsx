import styles from "./Footer.module.css";

const LINK_COLUMNS = [
  ["Audio Description", "Investor Relations", "Legal Notices"],
  ["Help Centre", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
  ["Media Centre", "Privacy", "Contact Us"],
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="#" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M22 12a10 10 0 10-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z" />
          </svg>
        </a>
        <a href="#" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
          </svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M22 5.8c-.74.33-1.53.55-2.36.65a4.12 4.12 0 001.8-2.27c-.79.47-1.67.81-2.6 1a4.1 4.1 0 00-7 3.74 11.65 11.65 0 01-8.46-4.29 4.1 4.1 0 001.27 5.47c-.65-.02-1.27-.2-1.81-.5v.05a4.1 4.1 0 003.29 4.02c-.6.16-1.23.18-1.85.07a4.11 4.11 0 003.83 2.85A8.23 8.23 0 012 18.29a11.62 11.62 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67v-.53A8.3 8.3 0 0022 5.8z" />
          </svg>
        </a>
        <a href="#" aria-label="YouTube">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M23 12s0-3.2-.4-4.73a2.5 2.5 0 00-1.76-1.77C19.31 5.1 12 5.1 12 5.1s-7.31 0-8.84.4A2.5 2.5 0 001.4 7.27 26.13 26.13 0 001 12s0 3.2.4 4.73c.24.87.92 1.53 1.76 1.77 1.53.4 8.84.4 8.84.4s7.31 0 8.84-.4a2.5 2.5 0 001.76-1.77C23 15.2 23 12 23 12zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
          </svg>
        </a>
      </div>

      <div className={styles.links}>
        {LINK_COLUMNS.map((col, i) => (
          <ul key={i}>
            {col.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <p className={styles.copyright}>© 1997-2026 Netflix, Inc.</p>
    </footer>
  );
}

export default Footer;
