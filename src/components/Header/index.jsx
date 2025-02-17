import logo from "../../assets/Logo.png";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import styles from "./index.module.css"
import { IoMenuOutline } from "react-icons/io5";

import { sideMenuIndex } from "../../store";
import SideMenu from "../SideMenu";
export default function Header() {

    const { value, openMenu } = sideMenuIndex()

    return (
        <>
            <header className={styles.myHeader}>
                <div id={styles.theHeader} className="container d-flex align-items-center justify-content-between">
                    <img src={logo} alt="" />
                    <div className="d-flex position-relative">
                        <CiSearch className={styles.iconSearch + " position-absolute"} />
                        <input type="search" placeholder="Search" />
                    </div>
                    <nav>
                        <a href="./" className={styles.active}>Home</a>
                        <a href="./">About</a>
                        <a href="./">Contact Us</a>
                        <a href="./">Blog</a>
                    </nav>
                    <div className="gap-3" id={styles.iconWraper}>
                        <CiHeart className={styles.icon} />
                        <IoCartOutline className={styles.icon} />
                        <CiUser className={styles.icon} />
                    </div>
                    <IoMenuOutline onClick={openMenu} className={styles.menuIcon} />
                </div>
            </header>

            {
                value ? (
                    <SideMenu />
                ) : null
            }

        </>
    )
}