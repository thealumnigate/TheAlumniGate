import styles from './Nav.module.css'
import {Link} from "react-router-dom"

function Nav(){
    return (
    <nav>
        <img src="" alt="logo" />
        {/* <div className={styles.optns}> */}
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/filterform" className={styles.link}>Form</Link>
        <Link className={styles.link}>feature1</Link>
        {/* </div> */}
        <Link><button className={styles.signup}>Signup</button></Link>
        
    </nav>
    )
}
export default Nav;