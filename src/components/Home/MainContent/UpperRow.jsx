import styles from "./index.module.css";

const UpperRow = () => {
    return ( 
        <div className={styles.upperRow}>
        <div className={styles.leftImage}>
          <div className={styles.imageTrend}>
            <p>#1 in series</p>
            <i className="fa-solid fa-fire fa-sm"></i>
          </div>
          <div className={styles.imageText}>
            <p>squid game</p>
            <p>2021</p>
          </div>
        </div>

        <div className={styles.rightImage}>
          <div className={styles.imageRating}>
            <i className="fa-solid fa-star fa-xs"></i>
            <p>4.2</p>
          </div>
          <div className={styles.imageText}>
            <p>catching killers</p>
            <p>2021</p>
          </div>
        </div>
      </div>
     );
}
 
export default UpperRow;