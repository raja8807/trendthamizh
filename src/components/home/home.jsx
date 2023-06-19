import Layout from '../layout/layout'
import CategoriesList from './categories/categories_list'
import styles from './home.module.scss'

const Home = ()=>{
  return <div className={styles.home}>
    <CategoriesList/>
    
  </div>
}

export default Home