import styles from './Features.module.scss';

const Features = () => (
  <div className={styles.features}>
    <div className={styles.feature}>
      <svg className="icon">
        <use xlinkHref="/images/sprite.svg#icon-global" />
      </svg>
      <h4 className="heading-4">Worlds best luxury homes</h4>
      <p className="text">Lorem ipsum dolor sit amet consectetur sdfsdf sdfsdf sdfsdf?</p>
    </div>
    <div className={styles.feature}>
      <svg className="icon">
        <use xlinkHref="/images/sprite.svg#icon-trophy" />
      </svg>
      <h4 className="heading-4">Worlds best luxury homes</h4>
      <p className="text">Lorem ipsum dolor sit amet consectetur sdfsdf sdfsdf sdfsdf?</p>
    </div>
    <div className={styles.feature}>
      <svg className="icon">
        <use xlinkHref="/images/sprite.svg#icon-map-pin" />
      </svg>
      <h4 className="heading-4">Worlds best luxury homes</h4>
      <p className="text">Lorem ipsum dolor sit amet consectetur sdfsdf sdfsdf sdfsdf?</p>
    </div>
    <div className={styles.feature}>
      <svg className="icon">
        <use xlinkHref="/images/sprite.svg#icon-key" />
      </svg>
      <h4 className="heading-4">Top realtors</h4>
      <p className="text">Lorem ipsum dolor sit amet consectetur sdfsdf sdfsdf sdfsdf?</p>
    </div>
    <div className={styles.feature}>
      <svg className="icon">
        <use xlinkHref="/images/sprite.svg#icon-presentation" />
      </svg>
      <h4 className="heading-4">Worlds best luxury homes</h4>
      <p className="text">Lorem ipsum dolor sit amet consectetur sdfsdf sdfsdf sdfsdf?</p>
    </div>
    <div className={styles.feature}>
      <svg className="icon">
        <use xlinkHref="/images/sprite.svg#icon-lock" />
      </svg>
      <h4 className="heading-4">Secure payments on nexter</h4>
      <p className="text">Lorem ipsum dolor sit amet consectetur sdfsdf sdfsdf sdfsdf?</p>
    </div>
  </div>
);

export default Features;
