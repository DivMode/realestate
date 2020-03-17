import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a href="#" className="link">
            Find your dream home
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Request proposal
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Download home planner
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Contact usa
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Submit your propertu
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Come work with us
          </a>
        </li>
      </ul>
      <p className="copyright">&copy; Copyright 2020 by Peter K</p>
    </div>
  );
}
