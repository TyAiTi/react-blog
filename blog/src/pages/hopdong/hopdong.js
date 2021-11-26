import Header from "../../components/header/header"
import TopContract from "./topcontract"
import Tab from "../../components/tab/Tab"
import styles from './hopdong.module.css'
export default function HopDong(){

    return(
        <div className={styles.page}>
            <Header/>
            <div className={styles.space}>
                <TopContract/>
                <Tab/>
            </div>
        </div>
    )
}