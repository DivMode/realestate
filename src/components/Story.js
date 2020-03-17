import styles from './Story.module.scss';

const Story = () => (
  <>
    <div className={styles.pictures}>
      <img src="/images/story-1.jpeg" alt="Couple with new house" className={styles.img1} />
      <img src="/images/story-2.jpeg" alt="Couple with new house" className={styles.img2} />
    </div>
    <div className={styles.content}>
      <h3 className="heading-3 mb-sm">Happy customers</h3>
      <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas maxime dignissimos?</p>
      <button className="btn">Find your own home</button>
    </div>
  </>
);

export default Story;
