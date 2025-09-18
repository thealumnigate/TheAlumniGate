import styles from './Home.module.css'
import hero from '../assets/herobluetheme.jpg'


function Home(){
   return(
       <div>
          <main>
            <div  className={styles.hero} style={{backgroundImage:`url(${hero})`}}>
              {/* <img src={hero} alt="" /> */}
                   <div className={styles.motto}>Opportunites don't happen.You create them</div>
           </div>
          </main>
        <section>
                <h2>Current Jobs</h2>
         </section>
       </div>
   )
}
export default Home;