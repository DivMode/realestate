import styles from './Realtors.module.scss';

export default function Realtors() {
  return (
    <div className={styles.realtors}>
      <h3 className="heading-3">top 4 realtors</h3>
      <div className="list">
        <img src="images/realtor-1.jpeg" alt="Realtor 1" />
        <div className="details">
          <h4 className="heading-4">Erik Fellman</h4>
          <p className="sold">19 Houses Sold</p>
        </div>

        <img src="images/realtor-2.jpeg" alt="Realtor 2" />
        <div className="details">
          <h4 className="heading-4">Kim Brown</h4>
          <p className="sold">13 Houses Sold</p>
        </div>

        <img src="images/realtor-3.jpeg" alt="Realtor 3" />
        <div className="details">
          <h4 className="heading-4">Tobeu Ramsey</h4>
          <p className="sold">31 Houses Sold</p>
        </div>
      </div>
    </div>
  );
}
