import styles from './Nav.module.css'
import {Link} from "react-router-dom"

function Nav(){
    return (
    <nav>
        <div className={styles.left}>
            <img src="" alt="logo" />
        </div>
        <div className={styles.right}>
        {/* <div className={styles.optns}> */}
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/filterform" className={styles.link}>FillForm</Link>
        <Link className={styles.link}>feature1</Link>
        {/* </div> */}
        <Link to="/auth"><button className={styles.signup}>Signup</button></Link>
        <Link><button className={styles.signup}>Signup</button></Link>
        </div>
        
    </nav>
    )
}
export default Nav;