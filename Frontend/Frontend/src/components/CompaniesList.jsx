import styles from "./CompaniesList.module.css";

function CompaniesList(){
    return (
        <div>
           <div className={styles.search-container}>
                <input type="text" Htmlfor="search" className={styles.seach-input} />
                <button className={styles.search-btn}>Search</button>
           </div>
        </div>
    )
}

export default CompaniesList;