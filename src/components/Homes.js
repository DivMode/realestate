import styles from './Homes.module.scss';

function Cards({ image, title, location = 'USA', rooms, size, price }) {
  return (
    <div className="home">
      <img src={`/images/${image}.jpeg`} alt="House 1" />
      <svg className="like">
        <use xlinkHref="/images/sprite.svg#icon-heart-full" />
      </svg>
      <h5 className="name">{title}</h5>
      <div className="location">
        <svg>
          <use xlinkHref="/images/sprite.svg#icon-map-pin" />
        </svg>
        <p>{location}</p>
      </div>
      <div className="rooms">
        <svg>
          <use xlinkHref="/images/sprite.svg#icon-profile-male" />
        </svg>
        <p>{rooms} rooms</p>
      </div>
      <div className="area">
        <svg>
          <use xlinkHref="/images/sprite.svg#icon-expand" />
        </svg>
        <p>
          {size} m<sup>2</sup>
        </p>
      </div>
      <div className="price">
        <svg>
          <use xlinkHref="/images/sprite.svg#icon-key" />
        </svg>
        <p>{price}</p>
      </div>
      <button className="btn">Contact Realor</button>
    </div>
  );
}

export default function Homes() {
  return (
    <section className={styles.homes}>
      <Cards image="house-1" title="Beautiful family house" location="USA" rooms="5" size="11240" price="1240000" />
      <Cards image="house-2" title="Big House" location="USA" rooms="5" size="1240" price="12400" />
      <Cards image="house-3" title="Small house" location="Portugal" rooms="6" size="5678" price="354400" />
      <Cards image="house-4" title="A huge house" location="Germany" rooms="16" size="9831240" price="8412400" />
      <Cards image="house-5" title="Modern Family Apt" location="Italy" rooms="5" size="1240" price="12400" />
      <Cards image="house-6" title="Cool Home" location="USA" rooms="5" size="1240" price="12400" />
    </section>
  );
}
