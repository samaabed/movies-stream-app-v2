
import styles from "./index.module.css";

const BottomRow = () => {
    return ( 
        <div className={styles.bottomRow}>
        <div className={styles.continueWatching}>
          <div className={styles.continueWatchingTitle}>
            <p className={theme}>
              coninue watching <span>(3 movies remaining)</span>
            </p>
            <button className={theme}>see more</button>
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
          </div>
        </div>

        <div className={styles.sideImage}></div>
      </div>
     );
}
 
export default BottomRow;