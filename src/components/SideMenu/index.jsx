import { sideMenuIndex } from "../../store";
import styles from "./index.module.css";
export default function SideMenu() {
    const { closeMenu } = sideMenuIndex()
    return (
        <div className={styles.sideMenu} onClick={closeMenu}>
            <div onClick={(e) => e.stopPropagation()} className={styles.content + " animate__animated animate__fadeInRight"}>
                <nav className="d-flex flex-column p-3 gap-2">
                    <a href="./" className={styles.active}>Home</a>
                    <a href="./">About</a>
                    <a href="./">Contact Us</a>
                    <a href="./">Blog</a>
                </nav>
            </div>
        </div>
    )
}