import styles from "./index.module.css";
import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import ServicesItem from "./ServicesItem";


const RightSidebar = () => {
  const { theme } = useContext(ThemeContext);
  const services = ['apple tv', 'disney tv', 'hbo max tv', 'hulu', 'prime' ];
  return (
    <div className={styles.container}>
      <div className={styles.mediaServicesSction}>
        <h2 className={styles.sidebarTitle + ' ' + theme}>media services</h2>
        {
          services.map(service => <ServicesItem serviceName={service}/> )
        }
      </div>

      <div className={styles.genreSection}>
        <h2 className={styles.sidebarTitle + ' ' + theme}>genre</h2>
         <p className={styles.genreName + ' ' + theme}>action</p>
         <p className={styles.genreName + ' ' + theme}>comedy</p>
         <div className={styles.genreContainer}>
            <p className={styles.genreName}>drama</p>
         </div>
         <p className={styles.genreName + ' ' + theme}>horror</p>

      </div>
    </div>
  );
};

export default RightSidebar;
