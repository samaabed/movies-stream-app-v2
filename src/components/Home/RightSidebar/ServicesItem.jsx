import styles from "./index.module.css"
const ServicesItem = ({serviceName}) => {
    return ( 
        <>
            <div className={styles.mediaRow}>
            <div className={styles.mediaImage}></div>
            <p className={styles.mediaName + ' ' + theme}>{serviceName}</p>
        </div>
        </>
     );
}
 
export default ServicesItem;