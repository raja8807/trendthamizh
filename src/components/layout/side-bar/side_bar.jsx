
const { Row } = require("react-bootstrap")
import styles from './side_bar.module.scss'
const SideBar = ()=>{
   return <div className={styles.side_bar}>
    <Row>
        <h3>Top Picks</h3>
    </Row>
   </div>
}

export default SideBar