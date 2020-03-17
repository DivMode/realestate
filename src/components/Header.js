import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="images/logo.png" alt="Logo" className="logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn">View our properties</button>
      <div className="companyText">Seen On</div>
      <div className="companyLogos">
        <img src="images/logo-bbc.png" alt="BBC Logo" />
        <img src="images/logo-forbes.png" alt="Forbes Logo" />
        <img src="images/logo-techcrunch.png" alt="Techcrunch Logo" />
        <img src="images/logo-bi.png" alt="Business Insider Logo" />
      </div>
    </header>
  );
}
